# Lab 2: Docker Installation – Lab

## Objective:
Verify Docker is correctly installed on your system.

## Tasks:
1. Check version:
```bash
docker --version
docker compose version
```

2. Test permissions:
```bash
docker run busybox echo "Docker works!"
```

3. Optional: Enable Docker without sudo (Linux):
```bash
sudo usermod -aG docker $USER
newgrp docker
```
