# AdonisJS Tutorial

Repository Adonisjs following adocast videos.

## Prerequisites

nodejs version : 22
git version : ...
pg version : 16.x

## Install a local DB

CREATE DATABASE db_adonis2;
CREATE USER user_adonis2 WITH SUPERUSER PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE db_adonis2 TO user_adonis2;
ALTER DATABASE db_adonis2 OWNER TO user_adonis2;

## Install env var

copy .env.example into .env
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=user_adonis2
DB_PASSWORD=password

DB_DATABASE=db_adonis2

## Install project locally

npm install
npm run dev
