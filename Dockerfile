FROM node:16-alpine

RUN mkdir /admin3
WORKDIR /admin3
COPY .output/ .

ENV HOST 0.0.0.0
ENV PORT 8087

EXPOSE 8087 

ENTRYPOINT ["node", "server/index.mjs"]
