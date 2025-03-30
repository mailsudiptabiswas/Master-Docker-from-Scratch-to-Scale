# Chapter 3: Docker CLI & Architecture – Lab

## Objective:
Explore Docker client-server architecture and use common CLI commands.

## Tasks:
1. Pull and run Nginx:
```bash
docker pull nginx
docker run -d -p 8080:80 --name web nginx
```

2. Explore container internals:
```bash
docker exec -it web /bin/bash
```

3. Clean up:
```bash
docker stop web && docker rm web
```
