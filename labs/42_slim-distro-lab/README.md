# Lab 42: Slim OS Distros – Lab

## Objective:
Compare base images like Alpine, Distroless, BusyBox.

## Tasks:
1. Create Dockerfile for each:
```Dockerfile
# Alpine
FROM alpine
CMD ["sh"]

# BusyBox
FROM busybox
CMD ["sh"]
```

2. Build and compare:
```bash
docker build -t test-alpine -f Dockerfile.alpine .
docker build -t test-busybox -f Dockerfile.busybox .
docker images
```
