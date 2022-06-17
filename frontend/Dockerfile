FROM node:17-alpine3.14

WORKDIR /frontend

COPY package*.json ./
RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "start"]