FROM python:3.8.3-alpine

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt

# Install dependencies
RUN apk update \
    && apk add --no-cache libc-dev linux-headers postgresql-dev gcc python3-dev musl-dev

# Pillow dependencias
RUN apk add zlib-dev jpeg-dev libjpeg

RUN apk add --no-cache --virtual .build-deps libc-dev libxslt-dev zlib  && \
    apk add --no-cache libxslt && \
    pip install --no-cache-dir lxml>=3.5.0 && \
    apk del .build-deps

RUN pip install --upgrade pip                                    
RUN pip install -r /requirements.txt

# Create home directory for the app user
RUN mkdir -p /home/app

# Create the app user without root prvilegies
RUN addgroup -S app && adduser -S app -G app

# Create the appropriate directories
ENV HOME=/home/app
ENV APP_HOME=/home/app/web
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
RUN mkdir $APP_HOME/mediafiles

WORKDIR $APP_HOME

# copy project
COPY ./app $APP_HOME

# chown all the files to the app user
RUN chown -R app:app $APP_HOME

ENV PATH="/scripts:${PATH}"

COPY ./scripts /scripts
RUN chmod +x /scripts/*

# change to the app user
USER app

CMD ["entrypoint.sh"]

