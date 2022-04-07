FROM node:16 AS node

FROM bitnami/minideb:latest

COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

ADD ./docker/language-server/language-server /language-server
RUN cd /language-server && npm install

COPY ./docker/language-server/run.sh /tmp
RUN chmod +x  /tmp/run.sh
ENTRYPOINT ["/tmp/run.sh"]
