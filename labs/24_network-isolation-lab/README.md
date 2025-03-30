# Chapter 24: Network Isolation & DNS – Lab

## Objective:
Simulate multi-tier network access.

## Tasks:
1. Create networks and containers:
```bash
docker network create front
docker network create back

docker run -dit --name app1 --network front alpine sh
docker run -dit --name app2 --network back alpine sh
docker network connect back app1
```

2. Test DNS:
```bash
docker exec app1 ping app2
```
