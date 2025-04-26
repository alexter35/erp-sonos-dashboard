#!/bin/bash
cd /home/alexter33/erp-sonos-dashboard
sudo docker-compose down
sleep 3
sudo docker-compose up -d
