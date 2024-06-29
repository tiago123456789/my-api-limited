## About

The project has goal create an api with rate limit to allow you use that in your code to simulate the behaviour you will face when integrate with third api.

## Tecnologies

- Node.js
- Javascript
- Express.js
- Docker and Docker compose

## Instructions to put the project to run:

- Clone repository
- Execute command **docker-compose up -d**, so will be create the api based data you setted in **config.json**

## About config.json file:

- The property **route** is the route you want to create in api.
- The property **httpVerb** is the http verb you want to use on route the api.
- The property **successResponse** is a json object will returned on api response if is ok.
- The property **rateLimit.period** is value in seconds. For example: 10 that means will set a limit requests allowed in 10 seconds.
- The property **rateLimit.limitRequestInPeriod** is total requests allowed on period. For example: 10 that means you can make 10 requests in 10 seconds, if you exceeded the limit the api will return status code 429.
