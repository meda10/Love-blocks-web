# Love Blocks

Love Blocks is web based code editor for *[LÖVE](https://love2d.org/)* or Lua. You can use block based programing or
classic text editor. You can find the application here *[https://loveblocks.tk/](https://loveblocks.tk/)*. If you want
simple way to download your games to Android download
the *[Love Blocks - Android](https://play.google.com/store/apps/details?id=blocks.love)* from Play Store.

### Used Technologies
 - Laravel
 - MySQL
 - VueJS + InertiaJS
 - Tailwind CSS
 - Monaco Code Editor + Blockly Code Editor
 - Lua Language Server
 - Firebase Cloud Messaging (Communication with Android phone)
 - Docker 
 
# How it works

### Docker

Folder `docker` contains all files needed to create docker images

### Maintenance

Script `blockMaintenance.sh` checks if all blocks are working with current version of *[LÖVE](https://love2d.org/)*

# Installation

### Define environment variables

Create `.env` file for Docker configuration. Set `USE_LOCAL_CA=1` or change domain name and SSL certificates,
otherwise HTTPS will not work.

- If you want authentication with Google and GitHub you need to add provider information to `.env` file. More
  information *[here](https://github.com/joelbutcher/socialstream)*.
- If you want to connect to *[Love Blocks - Android](https://github.com/meda10/Love-blocks-android)*. First you will
  need
  to set up your Firebase account and create new project. Here you will need to create new web app ande new android app.
  Then download the web app configuration in `.json` and specify the file path in your `.env` file
  under `FIREBASE_CREDENTIALS`. You also need to add `google-services.json` to
  your *[Love Blocks - Android](https://github.com/meda10/Love-blocks-android)* app.

``` bash
cp .env.example .env
```

### Create docker containers

``` bash
docker-compose up --build -d
```

### MySQL configuration

Open MySQL container

``` bash
docker-compose exec mysql bash
```

Create database user and add privileges. The `USERNAME`, `PASSWORD` and `DB_NAME` must be same as in `.env` file.

``` bash
mysql -u root -p
show databases;
CREATE USER 'USERNAME'@'%' IDENTIFIED BY 'PASSWORD';
GRANT ALL PRIVILEGES ON * . * TO 'USERNAME'@'%';
FLUSH PRIVILEGES;
CREATE DATABASE 'DB_NAME';
USE 'DB_NAME';
GRANT ALL ON 'DB_NAME'.* TO 'USERNAME'@'%';
FLUSH PRIVILEGES;
EXIT;
exit
```

### Init laravel app

Install composer dependencies

``` bash
docker-compose run --rm composer install
```

Generate key for app

``` bash
docker-compose run --rm artisan key:generate
```

Create storage link

``` bash
docker-compose run --rm artisan storage:link
```

Migrate database and add initial data.

- If you want to create user with specific role you can do that in `RolePermissionSeeder.php`

``` bash
docker-compose run --rm artisan migrate:fresh --seed
```

Install npm dependencies and run

``` bash
docker-compose run --rm npm install
docker-compose run --rm npm run dev
```

## In production

Cache config and route

``` bash
docker-compose run --rm composer dump-autoload
docker-compose run --rm artisan config:cache
docker-compose run --rm artisan route:cache
```

Install npm dependencies and run production

``` bash
docker-compose run --rm npm install
docker-compose run --rm npm run production
```

## If something doesn't work

If Laravel shows Permission denied error for storage:

``` bash
sudo chmod -R 777 storage bootstrap/cache
```

- If Language server doesn't work check if binary has execute permission
- If you use ARM architecture use `docker-compose-arm.yml`
