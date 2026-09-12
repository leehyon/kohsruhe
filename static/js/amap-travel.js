// Travel map renderer — AMap JS API v2.0, green-dot style.
//
// Mirrors the proven approach from the public Travel-Map WP plugin used
// by szqp.site/travel: `AMap.Marker({ content, anchor: 'center' })`
// with inline styles so nothing from the host CSS can override the
// marker rendering.
//
// Data: data/travel.yaml
// Style: 16px green dots, white border, soft shadow. Optional badge
// renders the visit count if the same city appears more than once.

(function () {
  "use strict";

  // Visual constants — kept inline (not in a CSS file) because the
  // host CSS can otherwise override Marker content positioning.
  var COLOR = "#10b981";      // Tailwind emerald-500 — "visited"
  var SIZE = 16;
  var BORDER = "#ffffff";

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function ready(fn) {
    if (typeof AMap !== "undefined") return fn();
    var tries = 0;
    var iv = setInterval(function () {
      tries += 1;
      if (typeof AMap !== "undefined") {
        clearInterval(iv);
        fn();
      } else if (tries > 80) {
        clearInterval(iv);
        console.error("[amap-travel] AMap failed to load after 8s");
      }
    }, 100);
  }

  function buildMarkerContent(p, badge) {
    var badgeHtml = badge
      ? '<div style="position:absolute;top:-4px;right:-4px;min-width:16px;height:16px;padding:0 4px;border-radius:8px;background:#ef4444;color:#fff;font-size:10px;font-weight:600;line-height:16px;text-align:center;box-shadow:0 1px 2px rgba(0,0,0,0.2);">' +
        escapeHtml(String(badge)) +
        "</div>"
      : "";
    return (
      '<div class="amap-marker-dot" style="' +
        "position:relative;" +
        "width:" + SIZE + "px;" +
        "height:" + SIZE + "px;" +
        "background:" + COLOR + ";" +
        "border:2px solid " + BORDER + ";" +
        "border-radius:50%;" +
        "box-shadow:0 2px 6px rgba(0,0,0,0.25);" +
        "cursor:pointer;" +
        "transition:transform 0.15s ease;" +
        '">' +
        badgeHtml +
        "</div>"
    );
  }

  function buildInfoContent(place) {
    var html = '<div style="font-family:inherit;font-size:13px;line-height:1.5;max-width:240px;padding:2px 4px;">';
    html += '<div style="font-weight:600;font-size:14px;margin-bottom:6px;">' + escapeHtml(place.name) + "</div>";
    place.visits.forEach(function (visit) {
      html += '<div style="margin-bottom:6px;">';
      if (visit.visited) {
        html += '<div class="amap-info-date">' + escapeHtml(visit.visited) + "</div>";
      }
      if (visit.note) {
        html += '<div style="color:#444;">' + escapeHtml(visit.note) + "</div>";
      }
      html += "</div>";
    });
    html += "</div>";
    return html;
  }

  function init() {
    var container = document.getElementById("amap-container");
    if (!container) return;

    var dataEl = document.getElementById("amap-travel-data");
    if (!dataEl) return;

    var places;
    try {
      var raw = dataEl.textContent || "[]";
      var parsed = JSON.parse(raw);
      // Hugo's `jsonify` template emits a JSON string. When that string
      // is placed inside <script type="application/json">, the browser
      // exposes it via .textContent as a *quoted* string — so we have
      // to parse twice to get the actual array.
      if (typeof parsed === "string") {
        parsed = JSON.parse(parsed);
      }
      places = parsed;
    } catch (err) {
      console.error("[amap-travel] failed to parse travel data", err);
      return;
    }
    if (!places.length) return;

    // If the InfoWindow plugin wasn't pre-declared on the CDN URL,
    // load it now.
    if (typeof AMap.InfoWindow !== "function") {
      AMap.plugin(["AMap.InfoWindow"], function () {
        renderMap(places);
      });
    } else {
      renderMap(places);
    }
  }

  function renderMap(places) {
    var container = document.getElementById("amap-container");
    var map = new AMap.Map(container, {
      zoom: 4,
      center: [108.95, 33.87],
      viewMode: "2D",
      resizeEnable: true,
      // Leave AMap's defaults alone: the amap-logo (blue triangle + 高
      // 德地图 wordmark) sits in the bottom-left by default, and the
      // built-in zoom bar sits in the top-right. We add a small extra
      // control group (fullscreen + reset) anchored top-right, below
      // the default zoom bar.
      //   showZoomBar: true (default) — keep the standard +/- zoom bar
      //   showControlButton: true (default) — keep the 3D/compass toggle
    });

    var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -SIZE / 2 - 2) });
    var markers = [];

    // AMap v2.0 doesn't render the zoom bar by default — instantiate
    // it explicitly so we get the standard +/- control. ToolBar is a
    // separate plugin, so we need to load it first. We then hide its
    // built-in widget and wire our own row of 4 controls so the
    // zoom/fullscreen/reset buttons all share the same visual style
    // and sit on one row in the top-right corner.
    var standardControlsLoaded = false;
    function onStandardControls() {
      if (standardControlsLoaded) return;
      if (AMap.ToolBar) {
        var tb = new AMap.ToolBar({ position: "RT" });
        map.addControl(tb);
        // Hide the rendered DOM — we drive zoom from our own buttons.
        // This is purely visual re-skinning: the ToolBar instance is
        // still on the map and accepts programmatic zoom changes.
        setTimeout(function () {
          var node = container.querySelector(".amap-toolbar");
          if (node) node.style.display = "none";
        }, 0);
        standardControlsLoaded = true;
      }
    }
    if (typeof AMap.ToolBar !== "function") {
      AMap.plugin(["AMap.ToolBar"], onStandardControls);
    } else {
      onStandardControls();
    }

    // Custom right-edge control column: a single vertical strip with
    // four 36×36 buttons — zoom-in, zoom-out, fullscreen, reset —
    // sharing one card background so the group reads as one widget.
    // Positioned `right: 10px; top: 50%; transform: translateY(-50%)`
    // so it sits dead-center along the right edge of the map.
    // AMap's ToolBar instance handles the actual zoom logic via
    // map.zoomIn() / map.zoomOut().
    function btn(svgPath, action, title, isLast) {
      var borderBottom = isLast
        ? ""
        : "border-bottom:1px solid #e5e7eb;";
      return (
        '<button type="button" data-amap-action="' + action + '" aria-label="' + title + '" title="' + title + '" ' +
          'style="width:36px;height:36px;display:flex;align-items:center;justify-content:center;' +
          'border:0;background:transparent;cursor:pointer;color:#374151;line-height:1;' +
          borderBottom + '">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
            '<path d="' + svgPath + '"/>' +
          '</svg>' +
        '</button>'
      );
    }
    var ICON_PLUS = "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z";
    var ICON_MINUS = "M5 11h14v2H5z";
    var ICON_FULL = "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z";
    var ICON_RESET = "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L3.24 7.76C2.49 9.05 2.1 10.49 2.1 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z";

    var customControls = document.createElement("div");
    customControls.style.cssText =
      "position:absolute;right:10px;top:50%;z-index:10;" +
      "transform:translateY(-50%);" +
      "display:flex;flex-direction:column;align-items:stretch;" +
      "pointer-events:none;";
    customControls.innerHTML =
      '<div style="pointer-events:auto;display:flex;flex-direction:column;' +
        'background:rgba(255,255,255,0.95);border:1px solid #e5e7eb;border-radius:6px;' +
        'box-shadow:0 1px 3px rgba(0,0,0,0.1);overflow:hidden;">' +
        btn(ICON_PLUS, "zoom-in", "放大", false) +
        btn(ICON_MINUS, "zoom-out", "缩小", false) +
        btn(ICON_FULL, "fullscreen", "全屏", false) +
        btn(ICON_RESET, "reset", "重置视图", true) +
      '</div>';
    container.appendChild(customControls);

    customControls.querySelector('[data-amap-action="zoom-in"]').addEventListener("click", function () {
      map.zoomIn();
    });
    customControls.querySelector('[data-amap-action="zoom-out"]').addEventListener("click", function () {
      map.zoomOut();
    });
    customControls.querySelector('[data-amap-action="fullscreen"]').addEventListener("click", function () {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (container.requestFullscreen) {
        container.requestFullscreen();
      }
    });
    customControls.querySelector('[data-amap-action="reset"]').addEventListener("click", function () {
      map.setZoom(4);
      map.setCenter([108.95, 33.87]);
    });

    // Group visits by city so each place gets one marker and one
    // InfoWindow containing all of its visits.
    var groupedPlaces = {};
    var uniquePlaces = [];
    places.forEach(function (p) {
      if (!p.name) return;
      if (!groupedPlaces[p.name]) {
        groupedPlaces[p.name] = {
          name: p.name,
          lng: p.lng,
          lat: p.lat,
          visits: [],
        };
        uniquePlaces.push(groupedPlaces[p.name]);
      }
      groupedPlaces[p.name].visits.push(p);
    });

    uniquePlaces.forEach(function (place) {
      if (typeof place.lng !== "number" || typeof place.lat !== "number") return;

      // Anchor 'center' centers the dot on the coordinate. Inline
      // styles bypass any host CSS that might otherwise misposition
      // the marker.
      var marker = new AMap.Marker({
        position: [place.lng, place.lat],
        title: place.name,
        content: buildMarkerContent(place, place.visits.length > 1 ? place.visits.length : null),
        anchor: "center",
        offset: new AMap.Pixel(0, 0),
        zooms: [2, 20],
      });

      marker.on("click", function () {
        infoWindow.setContent(buildInfoContent(place));
        infoWindow.open(map, marker.getPosition());
      });

      // `getContent()` must run AFTER `map.add(marker)` — calling it
      // earlier triggers AMap's "move DOM from template to overlay"
      // path, which leaves the marker rendered without its DOM. We
      // therefore bind hover effects by listening on the underlying
      // marker.getContent() return value post-add.
      map.add(marker);

      var el = marker.getContent();
      if (el && el.addEventListener) {
        // Inline-style hover so we don't depend on any external CSS.
        el.addEventListener("mouseenter", function () {
          el.style.transform = "scale(1.2)";
        });
        el.addEventListener("mouseleave", function () {
          el.style.transform = "scale(1)";
        });
      }

      markers.push(marker);
    });

    // AMap renders two attribution elements (.amap-logo and
    // .amap-copyright)
    // Both keep their full original content — only their absolute
    // positioning is overridden.
    function repositionAttribution() {
      var logo = container.querySelector(".amap-logo");
      var copy = container.querySelector(".amap-copyright");
      if (!logo || !copy) return;
      if (logo.dataset.amapRepositioned === "1") return;

      logo.style.cssText +=
        ";position:absolute;top:0;left:6px;bottom:auto;";
      copy.style.cssText +=
        ";position:absolute;right:4px;bottom:0;left:auto;top:auto;";
      logo.dataset.amapRepositioned = "1";
      copy.dataset.amapRepositioned = "1";
    }
    repositionAttribution();
    setTimeout(repositionAttribution, 300);
    setTimeout(repositionAttribution, 1200);

    if (markers.length === 1) {
      map.setCenter(markers[0].getPosition());
      map.setZoom(10);
    } else if (markers.length > 1) {
      map.setFitView(markers, false, [60, 60, 60, 60]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      ready(init);
    });
  } else {
    ready(init);
  }
})();
