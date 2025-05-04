# Lab 16: Docker Swarm Basics – Lab

## Objective:
Initialize Swarm, deploy a stack, and scale services.

## Files:
- docker-compose.yml

## Tasks:
1. Init Swarm and deploy:
```bash
docker swarm init
docker stack deploy -c docker-compose.yml mystack
```

2. Check:
```bash
docker service ls
docker node ls
```

3. Scale:
```bash
docker service scale mystack_web=5
```
