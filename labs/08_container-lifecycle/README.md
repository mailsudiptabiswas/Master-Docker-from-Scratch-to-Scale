# Chapter 8: Container Lifecycle – Lab

## Objective:
Learn container states and transitions.

## Tasks:
1. Create and inspect a stopped container:
```bash
docker create --name sleeper busybox sleep 60
docker inspect sleeper
```

2. Start and remove:
```bash
docker start sleeper
docker rm -f sleeper
```
