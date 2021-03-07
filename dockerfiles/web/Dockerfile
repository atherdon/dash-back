FROM nginx

WORKDIR /home/web

ARG NGINX_CONFIG_FILE=/etc/nginx/conf.d/default.conf
RUN rm $NGINX_CONFIG_FILE

## Set "nginx-ssl.conf" instead "nginx.conf" if needed SSL 
ARG USED_NGINX_CONF=./resources/nginx.conf
## If needed SSL do uncoment next lines and set paths to private and public parts of certificate 
# COPY .certs certs
# RUN chown nginx:nginx -R certs

COPY $USED_NGINX_CONF $NGINX_CONFIG_FILE