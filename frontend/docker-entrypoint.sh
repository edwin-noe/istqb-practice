#!/bin/sh
# Substitute only BACKEND_URL into nginx config at container startup.
# nginx always listens on port 80; Railway should route the public domain to port 80.

set -eu

BACKEND_URL=${BACKEND_URL:-http://backend:8000}

envsubst '${BACKEND_URL}' \
  < /etc/nginx/conf.d/default.conf.template \
  > /etc/nginx/conf.d/default.conf

echo "Using BACKEND_URL=${BACKEND_URL}"
exec nginx -g "daemon off;"
