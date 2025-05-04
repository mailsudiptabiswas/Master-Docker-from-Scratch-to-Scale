# Lab 19: Storage & Shared Volumes – Lab

## Objective:
Simulate shared volume using bind mounts or NFS (if available).

## Tasks:
1. Mount volume:
```bash
docker volume create --driver local mydata
```

2. Use across services (demo):
```bash
docker run -v mydata:/data --name writer busybox sh -c "echo Hello > /data/file.txt"
docker run -v mydata:/data --rm busybox cat /data/file.txt
```
