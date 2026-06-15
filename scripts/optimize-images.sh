#!/usr/bin/env bash
#
# Optimize the photos in public/ for the web using macOS `sips` (no extra deps).
# Downscales anything wider than MAX_WIDTH and re-encodes JPEGs at QUALITY.
# Originals are backed up to public/_originals/ on first run.
#
# Usage:  bash scripts/optimize-images.sh
#
# For best results (WebP/AVIF + smaller files) install a dedicated tool such as
# `squoosh-cli` or `sharp` and adapt this script — sips on some macOS builds
# cannot write WebP.
set -euo pipefail

MAX_WIDTH=1600
QUALITY=82
DIR="public"
BACKUP="$DIR/_originals"

mkdir -p "$BACKUP"

shopt -s nullglob nocaseglob
for img in "$DIR"/*.jpg "$DIR"/*.jpeg "$DIR"/*.png; do
  name="$(basename "$img")"
  # skip already-processed backups
  [ -f "$BACKUP/$name" ] && continue

  width="$(sips -g pixelWidth "$img" | awk '/pixelWidth/{print $2}')"
  cp "$img" "$BACKUP/$name"

  if [ "${width:-0}" -gt "$MAX_WIDTH" ]; then
    sips --resampleWidth "$MAX_WIDTH" "$img" >/dev/null
  fi
  # re-encode JPEGs to drop the file size; convert PNG photos to JPEG manually.
  case "$name" in
    *.jpg|*.jpeg|*.JPG|*.JPEG)
      sips -s format jpeg -s formatOptions "$QUALITY" "$img" >/dev/null
      ;;
  esac

  echo "optimized $name ($width px -> max ${MAX_WIDTH}px)"
done

echo "Done. Originals preserved in $BACKUP/ (delete once you're happy with the results)."
