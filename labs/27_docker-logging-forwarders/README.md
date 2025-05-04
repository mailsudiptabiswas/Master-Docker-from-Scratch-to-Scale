# Lab 27: Docker Log Forwarding – Lab

## Objective:
Forward container logs using Fluent Bit to Loki or file.

## Tasks:
1. Run container with mounted logs:
```bash
docker run -d --name loggy busybox sh -c "while true; do echo log test; sleep 2; done"
```

2. Use Fluent Bit to tail `/var/lib/docker/containers` (requires config)

_Note: This requires host access to Docker log paths._
