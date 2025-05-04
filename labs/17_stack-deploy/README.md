# Lab 17: Stack Deployments – Lab

## Objective:
Deploy full stack with multiple services in Swarm.

## Files:
- docker-compose.yml

## Tasks:
1. Init swarm and deploy:
```bash
docker swarm init
docker stack deploy -c docker-compose.yml fullstack
```
