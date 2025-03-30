#!/bin/bash
docker swarm init --advertise-addr $(hostname -i)
docker service create --name web --replicas 3 -p 80:80 nginx
