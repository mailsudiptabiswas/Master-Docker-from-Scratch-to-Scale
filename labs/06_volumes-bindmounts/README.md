# Lab 6: Docker Volumes & Bind Mounts – Lab

## Objective:
Understand volume types and share data between host and container.

## Tasks:
1. Create volume and run container:
```bash
docker volume create myvol
docker run -v myvol:/data busybox sh -c "echo Hello > /data/hello.txt"
```

2. Bind mount current directory:
```bash
docker run -v $(pwd):/mnt alpine ls /mnt
```
