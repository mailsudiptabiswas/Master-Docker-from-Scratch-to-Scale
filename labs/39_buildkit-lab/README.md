# Lab 39: BuildKit – Lab

## Objective:
Enable and use Docker BuildKit for improved builds.

## Tasks:
1. Enable BuildKit (Linux/macOS):
```bash
export DOCKER_BUILDKIT=1
```

2. Build with BuildKit features:
```bash
docker build -t buildkit-demo --progress=plain .
```
