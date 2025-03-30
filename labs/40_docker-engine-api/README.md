# Chapter 40: Docker Engine API – Lab

## Objective:
Interact with Docker remotely via REST API.

## Tasks:
1. Enable TCP API:
```bash
dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock
```

2. Call API:
```bash
curl http://localhost:2375/containers/json
```

_Note: Do not use TCP API in production without TLS!_
