# Chapter 4: Images, Containers, Layers – Lab

## Objective:
Build custom Docker images and explore container lifecycle.

## Files:
- Dockerfile
- index.html

## Tasks:
1. Build image:
```bash
docker build -t my-nginx .
```

2. Run and test:
```bash
docker run -d -p 8080:80 my-nginx
```
