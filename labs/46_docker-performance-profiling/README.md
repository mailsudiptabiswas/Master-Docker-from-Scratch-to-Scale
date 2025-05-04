# Lab 46: Docker Performance Profiling – Lab

## Objective:
Measure resource usage and profile container performance.

## Tasks:
1. Run a test container:
```bash
docker run -d --name stress --cpus="1" progrium/stress --cpu 1
```

2. Monitor:
```bash
docker stats
docker inspect stress
```
