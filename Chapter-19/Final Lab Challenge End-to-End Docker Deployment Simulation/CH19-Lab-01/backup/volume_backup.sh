#!/bin/bash
docker run --rm --volumes-from $1 -v $(pwd):/backup alpine   tar cvf /backup/backup.tar /data
