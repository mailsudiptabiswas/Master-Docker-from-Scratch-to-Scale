# Lab 01: Basic Docker CLI & Dockerfile
## Objectives:
- Build a Docker image
- Run containers
- Use `exec`, `inspect`, `logs`

## Instructions:
1. Build the image:
   ```bash
   docker build -t basic-docker .
   ```
2. Run the container:
   ```bash
   docker run --name test-basic basic-docker
   ```
3. Try:
   ```bash
   docker exec test-basic cat /hello.txt
   docker inspect test-basic
   docker logs test-basic
   ```
