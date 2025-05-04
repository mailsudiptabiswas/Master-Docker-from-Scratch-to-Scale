# Lab 36: Docker Registry Cache Proxy – Lab

## Objective:
Set up a caching proxy for Docker Hub using registry image.

## Tasks:
1. Start registry in proxy mode:
```bash
docker run -d -p 5000:5000 --name registry   -e REGISTRY_PROXY_REMOTEURL=https://registry-1.docker.io   registry:2
```

2. Pull an image via proxy:
```bash
docker pull localhost:5000/library/alpine
```
