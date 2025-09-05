#!/bin/bash

# Base folder where your images are
SRC_DIR="public"
# Destination folder for optimized images
DEST_DIR="optimized"

# Create destination folder if it doesn't exist
mkdir -p "$DEST_DIR"

# Find all jpg and png files recursively
find "$SRC_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r FILE; do
  # Get relative path (remove SRC_DIR from the beginning)
  REL_PATH="${FILE#$SRC_DIR/}"

  # Destination path with same structure
  DEST_PATH="$DEST_DIR/$REL_PATH"

  # Create destination subfolder if needed
  mkdir -p "$(dirname "$DEST_PATH")"

  # Optimize and save into DEST_PATH
  mogrify -strip -interlace Plane -quality 85% -path "$(dirname "$DEST_PATH")" "$FILE"

  echo "Optimized: $FILE -> $DEST_PATH"
done
