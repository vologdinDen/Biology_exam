#!/bin/sh

echo "Waitinng mysql..."

until curl --http0.9 http://"$SQL_HOST":"$SQL_PORT";do
    >&2 echo "Mysql is unavialable"
    sleep 30
done

echo "Mysql started"

cd /exam_app/backend/

# python ./manage.py collectstatic --noinput
# # gunicorn exam.wsgi --bind 0.0.0.0:8000
# python ./manage.py runserver

exec "$@"