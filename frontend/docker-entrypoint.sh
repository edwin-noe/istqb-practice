#!/bin/sh
# Substitute PORT and BACKEND_URL into nginx config at container startup.
# Railway sets $PORT dynamically; BACKEND_URL must be set to the backend service URL.
# e.g. BACKEND_URL=https://istqb-backend.railway.app

PORT=${PORT:-80}
BACKEND_URL=${BACKEND_URL:-http://backend:8000}

envsubst '${PORT} ${BACKEND_URL}' \
  < /etc/nginx/conf.d/default.conf.template \
  > /etc/nginx/conf.d/default.conf

exec nginx -g "daemon off;"
