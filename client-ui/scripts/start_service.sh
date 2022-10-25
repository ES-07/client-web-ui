#!/bin/bash
cd /var/www/html/
mv Node-proxy.conf  /etc/nginx/conf.d
ng serve
npm start >/dev/null 2>&1 &
