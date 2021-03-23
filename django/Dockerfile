FROM python:3.6.2-alpine

# set work directory
RUN mkdir /app
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /app/requirements.txt

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev python3-dev musl-dev gcc

# Pillow dependencias
RUN apk add zlib-dev jpeg-dev libjpeg

# dependencies
RUN apk add --no-cache --virtual .build-deps gcc libc-dev libxslt-dev && \
    apk add --no-cache libxslt && \
    apk del .build-deps

RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install --upgrade Pillow

RUN apk add python3-dev build-base linux-headers pcre-dev
RUN pip install https://github.com/unbit/uwsgi/archive/uwsgi-2.0.zip#egg=uwsgi

RUN pip install -r /app/requirements.txt

RUN mkdir /app/static
RUN mkdir /app/media

# copy project
COPY ./app /app

# copy entrypoint.sh
COPY scripts/entrypoint.sh /app/entrypoint.sh

RUN chmod +x /app/entrypoint.sh

# run entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]

