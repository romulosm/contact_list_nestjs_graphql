FROM node:12-alpine

LABEL maintainer="romulo.machado@live.com"

RUN npm install -g pm2 && \
  addgroup -S service && \
  adduser application -S -G service

COPY . /home/application
RUN cd /home/application && npm install --production

RUN chmod -R 775 /home/application
RUN chown -R application:service /home/application

USER application
WORKDIR /home/application

EXPOSE 3000

CMD pm2-runtime start ./process.yml
