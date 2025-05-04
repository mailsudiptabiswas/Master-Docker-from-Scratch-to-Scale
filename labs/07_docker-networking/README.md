# Lab 7: Docker Networking – Lab

## Objective:
Explore Docker's default networks and create custom ones.

## Tasks:
1. View networks:
```bash
docker network ls
```

2. Create bridge network and connect containers:
```bash
docker network create mynet
docker run -dit --name alpine1 --network mynet alpine sh
docker run -dit --name alpine2 --network mynet alpine sh
docker exec alpine1 ping -c 3 alpine2
```
