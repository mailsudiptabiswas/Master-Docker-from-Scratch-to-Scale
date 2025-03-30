# Lab 01: Multi-Stage Builds and Caching

This lab demonstrates how to reduce image size using multi-stage builds in Docker.

## Steps:
1. Review the provided Dockerfile.
2. Build the image: `docker build -t node-app .`
3. Run and verify it: `docker run -d -p 8080:80 node-app`
4. Visit `http://localhost:8080` to confirm.

## Expected Result:
Only the final build stage is present in the container.