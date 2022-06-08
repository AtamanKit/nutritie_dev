FROM node:17-alpine3.14

WORKDIR /frontend

COPY package*.json .
#npm install, update
RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
