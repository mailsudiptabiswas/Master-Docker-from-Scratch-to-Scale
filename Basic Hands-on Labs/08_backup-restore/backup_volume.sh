#!/bin/bash
docker run --rm --volumes-from target-container -v $(pwd):/backup alpine   tar cvf /backup/backup.tar /data
