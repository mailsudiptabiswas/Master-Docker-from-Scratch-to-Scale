# Lab 11: Docker Logs & Monitoring – Lab

## Objective:
View container logs and basic resource stats.

## Tasks:
1. Start a sample app:
```bash
docker run -d --name logdemo busybox sh -c "while true; do echo log entry; sleep 1; done"
```

2. View logs and stats:
```bash
docker logs logdemo
docker stats
```

3. Cleanup:
```bash
docker rm -f logdemo
```
