FROM node:20.15.1

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --legacy-peer-deps

COPY . /app

RUN npm run build

EXPOSE 8000

CMD ["npm", "run", "prod-run"]
