# Lab 47: Docker Hardening Practices – Lab

## Objective:
Apply security best practices on Docker containers.

## Tasks:
1. Run non-root, read-only, drop capabilities:
```bash
docker run --read-only --cap-drop ALL --user 1000 alpine
```

2. Use seccomp and AppArmor profiles (Linux only)
