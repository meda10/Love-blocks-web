# Installation

## Define environment variables in .env file

Create .env file for Docker database configuration.

``` bash
cp .env.example .env
```


There is also antoher file inside **source** folder for Laravel configuration.

If you want to connect to remote database than use this command:


``` bash
cp ./source/.env-remote.example ./source/.env
```


If you want to use local database than use this command:


``` bash
cp ./source/.env-local.example ./source/.env
```

In case that you chose local database than you should setup database according to instructions below (see secition MySQL configuration and beyond).


## Create docker containers

This operation takes a long time to finish.
``` bash
docker-compose up --build -d
```

## Init Laravel project

Once docker containers are running, it's time to init laravel.

Download composer dependencies for Laravel such as **vendor** direcotry.

``` bash
docker-compose run --rm composer update
docker-compose run --rm composer require laravel/jetstream
docker-compose run --rm composer require inertiajs/inertia-laravel
docker-compose run --rm composer require laravel/sanctum 
docker-compose run --rm composer require tightenco/ziggy

docker-compose run --rm artisan jetstream:install inertia
docker-compose run --rm npm install && npm run dev
docker-compose run --rm artisan migrate:fresh
```

If Laravel shows Permission denied error for storage:
``` bash
sudo chmod -R 777 storage bootstrap/cache
```

After that Laravel wants to generate key for *php artisan*.

``` bash
docker-compose exec php php artisan key:generate
docker-compose run --rm artisan key:generate
```

Storage link
``` bash
docker-compose exec php php artisan storage:link
docker-compose run --rm artisan storage:link
```

To run periodical scheduling
 ``` bash
sudo docker-compose exec -d php crond -f
```

Than everything inside method `schedule()` in `source/App/Console/Kernel.php` will be executed. Than use for example `$schedule->call(function () {})->everyTwoMinutes();` to execute function every two minutes (see [Laravel scheduling](https://laravel.com/docs/8.x/scheduling))

After install npm dependencies.

``` bash
docker-compose run --rm npm install
```


To compile project:

``` bash
sudo docker-compose run --rm npm run dev
```

If you cannot install anything or run watch/dev than try [this](https://github.com/JeffreyWay/laravel-mix/issues/1072). This happens because of cache.


<!--
Next you must install the frontend scaffolding (Bootstrap and Vue.js). ("Yes" for commands with `--auth`):
``` bash
php artisan ui bootstrap
php artisan ui vue
php artisan ui bootstrap --auth
php artisan ui vue --auth
```

Next you must install project frontend dependencies:
``` bash
npm install
```
-->

If you edit css (sass) files, run `npm run dev` command to compile sass file and it will be put into `public/css` directory (more [frontend writing](https://laravel.com/docs/7.x/frontend#writing-css)).


Now it should work:

Service | Address
------- | -------
Web app | localhost:8080
phpmyadmin | localhost:8081

In phpmyadmin leave **Server** field empty. Default **Name** is *root* and default **Password** is *secret* (from **.env** file).


## MySQL configuration

Open MySQL container
``` bash
docker-compose exec mysql bash
```

Create user
``` bash
mysql -u root -p
show databases;
CREATE USER 'username'@'%' IDENTIFIED BY 'randomPassword123!#$';
GRANT ALL PRIVILEGES ON * . * TO 'username'@'%';
FLUSH PRIVILEGES;
CREATE DATABASE laravel_db;
USE laravel_db;
GRANT ALL ON laravel_db.* TO 'username'@'%';
FLUSH PRIVILEGES;
EXIT;
exit
```

## Migrate Database

To initialize tables and data in PhpMyAdmin run command:

``` bash
docker-compose exec php php artisan migrate:fresh --seed
```


## Delete docker containers and images

In case there was any problem and you wish to delete docker containers and images.

Easiest way - delete all containers and images:

``` bash
sudo docker rm -f $(sudo docker ps -a -q)
```

``` bash
sudo docker rmi -f $(sudo docker images -a -q)
```

## CMD's

Generate Models from DB schema
``` bash
 docker-compose run --rm artisan code:models
```
