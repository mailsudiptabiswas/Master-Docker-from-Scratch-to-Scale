# Chapter 13: Docker Security Basics – Lab

## Objective:
Run container with limited privileges and a read-only FS.

## Tasks:
1. Build and run:
```bash
docker build -t secure-container .
docker run --read-only --cap-drop ALL secure-container
```
