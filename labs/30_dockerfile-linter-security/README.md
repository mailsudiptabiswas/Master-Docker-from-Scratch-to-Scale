# Chapter 30: Dockerfile Linting & Security – Lab

## Objective:
Use hadolint and trivy to analyze Dockerfile/image security.

## Tasks:
1. Lint Dockerfile:
```bash
docker run --rm -i hadolint/hadolint < Dockerfile
```

2. Run Trivy:
```bash
trivy image python:3.10
```

_Install `trivy` and `hadolint` beforehand._
