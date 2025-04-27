#!/bin/bash

# Docker Health Watchdog
# Monitors container health and restarts + notifies

while true
do
  for container in $(docker ps --format '{{.ID}}')
  do
    health=$(docker inspect --format='{{.State.Health.Status}}' $container 2>/dev/null)
    name=$(docker inspect --format='{{.Name}}' $container | sed 's/\///')

    if [[ "$health" == "unhealthy" ]]; then
      echo "$(date) : Container $name ($container) is unhealthy. Restarting..." >> /var/log/docker_watchdog.log

      docker restart $container

      # Email alert (adjust your msmtp or sendmail config)
      echo -e "Subject: [ALERT] Docker Container $name Restarted\nContainer $name was unhealthy and has been restarted." | msmtp youremail@example.com

    fi
  done
  sleep 60
done
