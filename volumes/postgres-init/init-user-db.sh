#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER $POSTGRES_APPLICATION_USER WITH PASSWORD '$POSTGRES_APPLICATION_USER_PASSWORD';
    CREATE DATABASE $POSTGRES_APPLICATION_DATABASE;
    GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_APPLICATION_DATABASE TO $POSTGRES_APPLICATION_USER;
EOSQL