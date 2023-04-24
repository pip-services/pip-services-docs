Create a /package.json file at the root of the project with the following content to configure dependencies and project parameters:

**/package.json**

```json
{
  "name": "@pip-services/facade-sample-nodex",
  "version": "1.0.0",
  "author": "Conceptual Vision Consulting LLC",
  "description": "Sample Facade Microservice in Node",
  "contributors": [
    "Sergey Seroukhov <seroukhov@entinco.com>"
  ],
  "main": "./obj/src/index.js",
  "typings": "./obj/src/index.d.ts",
  "noAnalyze": true,
  "private": false,
  "scripts": {
    "start": "node app",
    "test": "mocha -t 10000 -R spec -u tdd --recursive ./obj/test",
    "benchmark": "matcha -R clean -I tdd ./benchmark/main.js"
  },
  "dependencies": {
    "pip-services3-commons-nodex": "^1.0.1",
    "pip-services3-container-nodex": "^1.0.2",
    "pip-services3-rpc-nodex": "^1.1.1"
  },
  "devDependencies": {
    "@types/chai": "^4.0.0",
    "@types/mocha": "^8.0.0",
    "@types/node": "^10.17.26",
    "chai": "^4.3.4",
    "mocha": "^8.3.2"
  }
}


```

