#!/bin/bash
docker network create custom-net
docker run -d --name container1 --network custom-net busybox sleep 3600
docker run --rm --network custom-net busybox ping -c 3 container1
