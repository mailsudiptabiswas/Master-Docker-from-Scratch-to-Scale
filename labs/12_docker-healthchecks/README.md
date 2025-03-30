# Chapter 12: Docker Health Checks – Lab

## Objective:
Add and trigger HEALTHCHECK in Dockerfile.

## Files:
- Dockerfile

## Tasks:
1. Build and run:
```bash
docker build -t healthcheck-demo .
docker run -d --name healthz healthcheck-demo
```

2. Inspect health:
```bash
docker inspect --format='{{.State.Health.Status}}' healthz
```
