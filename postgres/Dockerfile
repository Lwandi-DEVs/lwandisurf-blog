FROM postgres:12.0-alpine
RUN mkdir /backup
RUN chmod -R 777 /backup
ENV PATH="/scripts:${PATH}"
COPY ./scripts /scripts
RUN chmod +x /scripts/*
