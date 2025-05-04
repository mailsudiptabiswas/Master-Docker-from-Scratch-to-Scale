# Lab 9: Advanced Dockerfile – Lab

## Objective:
Optimize image using multi-stage builds.

## Files:
- Dockerfile.multi
- index.html

## Tasks:
1. Build and run optimized image:
```bash
docker build -t web-opt -f Dockerfile.multi .
docker run -d -p 8080:80 web-opt
```
