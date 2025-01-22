FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
