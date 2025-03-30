#!/bin/bash
docker run --rm -v restored:/data -v $(pwd):/backup busybox \
  tar xzvf /backup/volume_backup.tar.gz -C /
