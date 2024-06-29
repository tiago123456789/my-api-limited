from node:20-alpine3.20

ENV RATE_LIMIT_PERIOD=60 

ENV RATE_LIMIT_REQUEST_IN_PERIOD=10

ENV PORT=3000

WORKDIR app

COPY package.json package-lock.json .

COPY . . 

RUN npm install

CMD ["node", "index.js"]