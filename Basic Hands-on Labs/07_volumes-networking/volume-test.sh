#!/bin/bash
docker run -v data-volume:/data busybox sh -c "echo Hello > /data/test.txt"
docker run -v data-volume:/data busybox cat /data/test.txt
