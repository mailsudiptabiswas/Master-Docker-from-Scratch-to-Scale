# Chapter 10: Ports, Expose, Entrypoint – Lab

## Objective:
Use EXPOSE, CMD, ENTRYPOINT and test port publishing.

## Files:
- Dockerfile
- app.sh

## Tasks:
1. Build and run:
```bash
docker build -t entrypoint-lab .
docker run -p 9090:9090 entrypoint-lab
```
