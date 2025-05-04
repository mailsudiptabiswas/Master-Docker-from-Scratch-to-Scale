# Lab 38: containerd Intro – Lab

## Objective:
Explore `ctr` and containerd directly.

## Tasks:
1. Run container with containerd:
```bash
sudo ctr image pull docker.io/library/alpine:latest
sudo ctr run -t --rm docker.io/library/alpine:latest test /bin/sh
```

_Note: Requires containerd installed_
