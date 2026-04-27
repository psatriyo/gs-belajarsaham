#!/bin/bash
# Build script for gs-belajarsaham
# Minifies CSS, prepares deployment-ready assets, and swaps references

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
  echo "  Install Node.js to enable CSS minification"
fi

# P3-P7: Swap CSS references to minified version in all HTML files
if [ -f css/style.min.css ]; then
  echo "  Swapping CSS references to minified version..."
  for f in *.html; do
    if [ -f "$f" ]; then
      sed -i.bak 's|href="css/style.css"|href="css/style.min.css"|g' "$f"
      # Keep the preload pointing to minified too
      sed -i.bak 's|href="css/style.css" as="style"|href="css/style.min.css" as="style"|g' "$f"
      rm -f "${f}.bak"
    fi
  done
  echo "  ✅ All HTML files now reference style.min.css"
else
  echo "  ⚠️  style.min.css not found, skipping reference swap"
  echo "  HTML files will continue using style.css"
fi

echo "✅ Build complete!"
echo ""
echo "To deploy: push to main branch (GitHub Pages auto-deploys)"
echo "To preview locally: open index.html in a browser"
echo ""
echo "💡 To switch back to development CSS, run:"
echo "   for f in *.html; do sed -i '' 's|style.min.css|style.css|g' \"\$f\"; done"