# Lab 41: Container Runtime Comparison – Lab

## Objective:
Try alternative runtimes (e.g., Podman, crun, containerd).

## Tasks:
1. Try Podman:
```bash
podman run -it alpine
```

2. Compare CLI:
```bash
docker ps
podman ps
```

3. Try containerd (requires root):
```bash
sudo ctr image pull docker.io/library/alpine
```

_Note: Only attempt if alternate runtimes are installed._
