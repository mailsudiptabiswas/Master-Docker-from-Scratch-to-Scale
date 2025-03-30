# Chapter 29: Image Slimming – Lab

## Objective:
Compare image sizes between normal and slimmed Dockerfile.

## Files:
- Dockerfile (normal)
- Dockerfile.slim

## Tasks:
1. Build both and compare:
```bash
docker build -t normal -f Dockerfile .
docker build -t slim -f Dockerfile.slim .
docker images
```
