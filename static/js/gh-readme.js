(function () {
  "use strict";

  function isProbablyAbsoluteUrl(url) {
    return /^(?:[a-z]+:)?\/\//i.test(url) || /^(?:mailto:|tel:|data:)/i.test(url);
  }

  function parsePositiveInt(value, fallback) {
    var n = Number.parseInt(String(value || ""), 10);
    return Number.isFinite(n) && n > 0 ? n : fallback;
  }

  function joinUrl(base, path) {
    if (!base) return path;
    if (!path) return base;
    if (base.endsWith("/") && path.startsWith("/")) return base + path.slice(1);
    if (!base.endsWith("/") && !path.startsWith("/")) return base + "/" + path;
    return base + path;
  }

  function buildUrls(owner, repo, branch) {
    var webBase = "https://github.com/" + owner + "/" + repo + "/blob/" + branch + "/";
    var rawBase = "https://raw.githubusercontent.com/" + owner + "/" + repo + "/" + branch + "/";
    return { webBase: webBase, rawBase: rawBase };
  }

  async function fetchText(url) {
    var res = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "text/plain"
      },
      credentials: "omit",
      cache: "no-store"
    });

    if (!res.ok) {
      var err = new Error("Failed to fetch " + url + " (" + res.status + ")");
      err.status = res.status;
      throw err;
    }

    return await res.text();
  }

  async function renderMarkdownWithGitHubApi(markdown, contextRepo) {
    var res = await fetch("https://api.github.com/markdown", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "text/html"
      },
      credentials: "omit",
      body: JSON.stringify({
        text: markdown,
        mode: "gfm",
        context: contextRepo
      })
    });

    if (!res.ok) {
      var err = new Error("GitHub Markdown API failed (" + res.status + ")");
      err.status = res.status;
      throw err;
    }

    return await res.text();
  }

  function rewriteRelativeLinks(container, urls) {
    // Links
    var anchors = container.querySelectorAll("a[href]");
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      var href = a.getAttribute("href");
      if (!href || href.startsWith("#") || isProbablyAbsoluteUrl(href)) continue;

      // GitHub-style relative link to file in repo
      a.setAttribute("href", joinUrl(urls.webBase, href));
      a.setAttribute("rel", "noopener");
      a.setAttribute("target", "_blank");
    }

    // Images
    var images = container.querySelectorAll("img[src]");
    for (var j = 0; j < images.length; j++) {
      var img = images[j];
      var src = img.getAttribute("src");
      if (!src || isProbablyAbsoluteUrl(src)) continue;

      img.setAttribute("src", joinUrl(urls.rawBase, src));
    }

    // Sources (e.g. <picture>)
    var sources = container.querySelectorAll("source[srcset]");
    for (var k = 0; k < sources.length; k++) {
      var source = sources[k];
      var srcset = source.getAttribute("srcset");
      if (!srcset) continue;

      // Very small parser: rewrite each url in srcset if relative.
      var parts = srcset.split(",").map(function (p) {
        return p.trim();
      });
      var rewritten = parts
        .map(function (part) {
          if (!part) return part;
          var spaceIdx = part.search(/\s/);
          var url = spaceIdx === -1 ? part : part.slice(0, spaceIdx);
          var descriptor = spaceIdx === -1 ? "" : part.slice(spaceIdx);
          if (!url || isProbablyAbsoluteUrl(url)) return part;
          return joinUrl(urls.rawBase, url) + descriptor;
        })
        .join(", ");

      source.setAttribute("srcset", rewritten);
    }
  }

  function setStatus(el, html) {
    el.innerHTML = html;
  }

  async function renderOne(el) {
    var owner = el.dataset.owner;
    var repo = el.dataset.repo;
    var branch = el.dataset.branch || "main";
    var path = el.dataset.path || "README.md";
    var cacheSeconds = parsePositiveInt(el.dataset.cacheSeconds, 3600);

    if (!owner || !repo) {
      setStatus(el, "<p>Missing <code>owner</code>/<code>repo</code>.</p>");
      return;
    }

    var contextRepo = owner + "/" + repo;
    var urls = buildUrls(owner, repo, branch);
    var rawReadmeUrl = "https://raw.githubusercontent.com/" + owner + "/" + repo + "/" + branch + "/" + path;

    var cacheKey = "gh-readme:v1:" + contextRepo + ":" + branch + ":" + path;

    try {
      var now = Date.now();
      var cached = null;
      try {
        cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
      } catch (_) {
        cached = null;
      }

      if (cached && cached.html && cached.expiresAt && cached.expiresAt > now) {
        el.innerHTML = cached.html;
        rewriteRelativeLinks(el, urls);
        return;
      }

      setStatus(el, "<p>Loading from GitHub…</p>");

      var markdown = await fetchText(rawReadmeUrl);
      var html = await renderMarkdownWithGitHubApi(markdown, contextRepo);

      el.innerHTML = html;
      rewriteRelativeLinks(el, urls);

      try {
        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            html: el.innerHTML,
            expiresAt: now + cacheSeconds * 1000
          })
        );
      } catch (_) {
        // Ignore storage failures.
      }
    } catch (e) {
      var repoUrl = "https://github.com/" + owner + "/" + repo;
      var msg =
        "<p>Failed to load README from GitHub. " +
        "<a href=\"" +
        repoUrl +
        "\" rel=\"noopener\" target=\"_blank\">Open on GitHub</a>." +
        "</p>";
      setStatus(el, msg);

      // eslint-disable-next-line no-console
      console.warn("gh-readme: ", e);
    }
  }

  function init() {
    var nodes = document.querySelectorAll(".gh-readme[data-owner][data-repo]");
    for (var i = 0; i < nodes.length; i++) {
      renderOne(nodes[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
