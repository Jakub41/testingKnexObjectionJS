# Builder
FROM node:17.3
RUN mkdir -p /home/node/code/node_modules && chown -R node:node /home/node/code
WORKDIR /home/node/code
COPY package*.json ./
USER node
RUN yarn install
COPY --chown=node:node . .
EXPOSE 8800

ENTRYPOINT [ "yarn", "run", "dev" ]
