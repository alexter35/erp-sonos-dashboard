#!/bin/bash
# Verifie si le conteneur tourne
if ! sudo docker ps --filter "name=sonos-control" --filter "status=running" | grep sonos-control > /dev/null
then
  echo "$(date) : Conteneur Sonos DOWN - redemarrage..." >> /home/alexter33/erp-sonos-dashboard/healthcheck.log
  cd /home/alexter33/erp-sonos-dashboard
  sudo docker-compose down
  sudo docker-compose up -d
else
  echo "$(date) : Conteneur Sonos OK" >> /home/alexter33/erp-sonos-dashboard/healthcheck.log
fi
