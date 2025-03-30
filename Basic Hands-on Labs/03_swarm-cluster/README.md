# Lab 03: Docker Swarm Cluster
## Objectives:
- Initialize Swarm
- Create services and scale them

## Instructions:
1. Run:
   ```bash
   ./init-swarm.sh
   ```
2. Try:
   ```bash
   docker node ls
   docker service ls
   docker service ps web
   docker service scale web=5
   ```
