# Final Lab: End-to-End Docker Deployment Simulation

## Stack Overview
- NGINX (frontend reverse proxy)
- Flask App (Python backend)
- Redis (cache)
- Prometheus (monitoring)
- Grafana (dashboard)

## Instructions
1. Build and run:
```bash
docker-compose up --build -d
```

2. Access services:
- Web App: http://localhost:8080
- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090

3. Simulate Failure:
```bash
docker stop $(docker ps --filter "name=app" -q)
```

4. Backup volume:
```bash
./backup/volume_backup.sh <container_name>
```

5. Deploy to Swarm (Optional):
```bash
docker swarm init
docker stack deploy -c docker-compose.yml final-lab
```
