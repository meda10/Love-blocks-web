FROM nginx:latest

# ADD Custom Config
COPY . /etc/nginx/

# Make Directory - Workspace
RUN mkdir -p /var/www/html
RUN mkdir -p /var/www/html/certbot

# ADD and set Group
RUN addgroup -gid 1000 laravel && adduser --uid 1000 --ingroup laravel --shell /bin/sh --disabled-password --gecos "" laravel

# Set Group to Workspace
RUN chown laravel:laravel /var/www/html
RUN chown laravel:laravel /var/www/html/certbot
