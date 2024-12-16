# AdonisJS Tutorial

Repository Adonisjs following adocast videos.

## Prerequisites

```bash
nodejs version : 22
git version 2.46.0
PostgreSQL version : 17.2
```

## Install a local DB

Open SQL CLI

- Linux or mac: `sudo -u postgres psql`
- Windows: `psql -U postgres`

Windows or Linux: you will need to provide the password set during the installation unless you ran it as an administrator.

```sql
CREATE DATABASE db_adonisjs6;
CREATE USER user_adonisjs6 WITH SUPERUSER PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE db_adonisjs6 TO user_adonisjs6;
ALTER DATABASE db_adonisjs6 OWNER TO user_adonisjs6;
```

## Install env var

copy .env.example into .env

## Install redis

Everything you need to know on how to install redis is here :
[http://redis.io/docs/install-redis/](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/)

After installing redis, if you have Linux, open and type in your `terminal`, or use your `WSL2` :

```bash
redis-cli
>ping
#PONG
```

## Install project locally

```shell
npm install
node ace configure @adonisjs/redis
node ace migration:run
node ace db:seed --files=database/seeders/start_seeder.ts
node ace db:seed --files=database/seeders/fake_seeder.ts
npm run dev
```

## Access the project on your local Server

Once the server is running, open your browser and navigate to:

<http://localhost:3333>
