#!/bin/bash
# Build script for gs-belajarsaham
# Minifies CSS and prepares deployment-ready assets

set -e

echo "🔧 Building gs-belajarsaham..."

# Minify CSS using clean-css
if command -v npx &> /dev/null; then
  echo "  Minifying CSS..."
  npx --yes clean-css-cli -o css/style.min.css css/style.css 2>/dev/null
  ORIGINAL=$(wc -c < css/style.css | tr -d ' ')
  MINIFIED=$(wc -c < css/style.min.css | tr -d ' ')
  SAVED=$(( (ORIGINAL - MINIFIED) * 100 / ORIGINAL ))
  echo "  ✅ CSS: ${ORIGINAL}B → ${MINIFIED}B (${SAVED}% smaller)"
else
  echo "  ⚠️  npx not found, skipping CSS minification"
fi

echo "✅ Build complete!"
echo ""
echo "To deploy: push to main branch (GitHub Pages auto-deploys)"
echo "To preview locally: open index.html in a browser"