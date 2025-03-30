# Chapter 43: Immutable Infrastructure – Lab

## Objective:
Rebuild and redeploy apps instead of patching.

## Tasks:
1. Simulate app config change:
```bash
docker build -t app:v1 .
docker run -d --name app1 app:v1
# change config -> rebuild
docker build -t app:v2 .
docker stop app1 && docker rm app1
docker run -d --name app2 app:v2
```
