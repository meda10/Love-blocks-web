FROM nginx:latest

# ADD Custom Config
COPY . /etc/nginx/

# Make Directory - Workspace
RUN mkdir -p /var/www/html
RUN mkdir -p /var/www/_letsencrypt

# ADD and set Group
RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

# Set Group to Workspace
RUN chown laravel:laravel /var/www/html
RUN chown laravel:laravel /var/www/_letsencrypt
