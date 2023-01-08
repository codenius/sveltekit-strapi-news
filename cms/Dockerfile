FROM node:16-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY ../.env ../
COPY ./ .
RUN npm run build

EXPOSE 1337
CMD ["npm", "start"]