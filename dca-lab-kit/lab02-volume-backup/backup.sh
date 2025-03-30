#!/bin/bash
docker run --rm -v mydata:/data -v $(pwd):/backup busybox \
  tar czvf /backup/volume_backup.tar.gz /data
