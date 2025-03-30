# Chapter 26: Docker Backup & Restore – Lab

## Objective:
Backup volumes and restore from tar archive.

## Tasks:
1. Create and backup volume:
```bash
docker volume create mydata
docker run --rm -v mydata:/data busybox sh -c "echo Backup > /data/file.txt"
docker run --rm --volumes-from $(docker create busybox) -v $(pwd):/backup busybox   tar cvf /backup/data.tar /data
```

2. Restore (simulated):
```bash
docker run --rm -v restored:/data -v $(pwd):/backup busybox   tar xvf /backup/data.tar -C /
```
