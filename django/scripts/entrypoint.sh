#!/bin/sh

set -e

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started!"
fi

if [ "$HTTP_SERVER" = "gunicorn" ]
then
    echo "Running Gunicorn HTTP server..."
    gunicorn $PROJECT_NAME.wsgi:application --bind 0.0.0.0:8000

elif [ "$HTTP_SERVER" = "django" ]
then
    echo "Running standard Django HTTP server..."
    python manage.py runserver 0.0.0.0:8000
    
else
    echo "Invalid HTTP Server!"
fi

exec "$@"