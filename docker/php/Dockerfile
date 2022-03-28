FROM php:8.0-fpm-alpine

# Copy File Config
ADD ./docker/php/www.conf /usr/local/etc/php-fpm.d/www.conf

# ADD and set Group
RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

# Create folder to run
RUN mkdir -p /var/www/html

# Set Profile
RUN chown laravel:laravel /var/www/html

# Work in the specific space
WORKDIR /var/www/html

# crontab schedule COPY
COPY ./docker/php/crontab /etc/crontabs/root

# Give execution rights on the cron job
RUN chmod 0644 /etc/crontabs/root

# Apply cron job
RUN crontab /etc/crontabs/root

# Install dependencies
RUN apk add --no-cache \
    freetype \
    libpng \
    libjpeg-turbo \
    freetype-dev \
    libpng-dev \
    libjpeg-turbo-dev

#RUN apk add --no-cache libzip-dev \
#    && docker-php-ext-configure zip \
#    --with-libzip=/usr/include \
#    && docker-php-ext-install zip

RUN apk add --no-cache \
  libzip-dev zip \
  && docker-php-ext-install zip

RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg

RUN NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
    docker-php-ext-install -j${NPROC} gd

RUN apk del --no-cache freetype-dev libpng-dev libjpeg-turbo-dev

RUN docker-php-ext-install pdo pdo_mysql

# install and enable xdebug
#RUN apk add --no-cache $PHPIZE_DEPS \
#	&& pecl install xdebug-2.9.7 \
#	&& docker-php-ext-enable xdebug

RUN apk add icu-dev
RUN docker-php-ext-configure intl \
    && docker-php-ext-install intl \
    && docker-php-ext-enable intl
