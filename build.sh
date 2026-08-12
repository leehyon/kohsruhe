#!/bin/sh
# Build the static site and generate the Pagefind search index.
#
# --minify  : strip whitespace / shorten inline JS / collapse CSS — produces
#            noticeably smaller HTML for the post lists and single posts.
# --gc      : garbage-collect unused cached resources under resources/_gen/
#            so the cache doesn't grow unbounded over time.

set -eu

hugo --gc --minify
npx --yes pagefind --site public
