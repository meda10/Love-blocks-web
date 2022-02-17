FROM nginx:stable-alpine

# ADD Custom Config
ADD ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
ADD ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
ADD ./docker/nginx/localhost.crt /etc/nginx/localhost.crt
ADD ./docker/nginx/localhost.decrypted.key /etc/nginx/localhost.decrypted.key

# Make Directory - Workspace
RUN mkdir -p /var/www/html

# ADD and set Group
RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

# Set Group to Workspace
RUN chown laravel:laravel /var/www/html
