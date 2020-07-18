FROM node:current-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","start"]
EXPOSE 3000