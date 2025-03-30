#!/bin/bash
docker run --name crashme busybox sh -c "exit 1"
docker logs crashme
docker inspect crashme
