#!/bin/bash
ARCHIVE=$1
docker run --rm -v capstone_data:/app -v $(pwd):/backup busybox \
  tar xzvf /backup/$ARCHIVE -C /
echo "✅ Restore complete. Volume capstone_data is now active."
