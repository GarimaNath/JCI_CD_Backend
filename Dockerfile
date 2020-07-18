FROM node:10
WORKDIR /onboarding_backend/src
COPY package.json /onboarding_backend
RUN npm install
COPY . /onboarding_backend
CMD node app.js
EXPOSE 3000