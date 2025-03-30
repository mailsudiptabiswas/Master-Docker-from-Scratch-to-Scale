# Chapter 48: Supply Chain Security – Lab

## Objective:
Scan images and Dockerfiles for vulnerabilities.

## Tools:
- Trivy
- Hadolint

## Tasks:
1. Scan:
```bash
trivy image nginx
```

2. Lint Dockerfile:
```bash
docker run --rm -i hadolint/hadolint < Dockerfile
```
