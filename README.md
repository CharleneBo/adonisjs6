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
CREATE DATABASE db_adonis2;
CREATE USER user_adonis2 WITH SUPERUSER PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE db_adonis2 TO user_adonis2;
ALTER DATABASE db_adonis2 OWNER TO user_adonis2;
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
npm run dev
```

## Access the project on your local Server

Once the server is running, open your browser and navigate to:

<http://localhost:3333>
