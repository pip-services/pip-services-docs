Create a /package.json file at the root of the project with the following content to configure dependencies and project parameters:

**/package.json**

```json
{
  "name": "pip-facade-sample-node",
  "version": "1.0.0",
  "author": "Enterprise Innovation Consulting LLC.",
  "description": "Public facade for sample",
  "contributors": [
    "Sergey Seroukhov <seroukhov@conceptual.vision>"
  ],
  "main": "./obj/src/index.js",
  "typings": "./obj/src/index.d.ts",
  "noAnalyze": true,
  "private": false,
  "scripts": {
    "start": "node app",
    "test": "mocha -t 10000 -R spec -u tdd --recursive ./obj/test",
    "benchmark": "matcha -R clean -I tdd ./benchmark/run.js"
  },
  "dependencies": {
    "busboy": "^0.3.1",
    "pip-services3-commons-node": "^3.0.0",
    "pip-services3-components-node": "^3.0.0",
    "pip-services3-rpc-node": "^3.1.8",
    "pip-services3-container-node": "^3.0.0",
    "pip-services3-data-node": "^3.0.0",
    "pip-services3-mongodb-node": "^3.0.0",
    "pip-services-roles-node": "^1.1.0",
    "pip-clients-roles-node": "^1.1.1",
    "pip-services-accounts-node": "^1.2.0",
    "pip-clients-accounts-node": "^1.1.2",
    "pip-services-sessions-node": "^1.1.0",
    "pip-clients-sessions-node": "^1.1.1",
    "pip-services-passwords-node": "^1.1.0",
    "pip-clients-passwords-node": "^1.0.1",
    "pip-services-beacons-node": "^1.0.0",
    "pip-clients-beacons-node": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "*",
    "@types/lodash": "^4.0.0",
    "@types/async": "^2.0.0",
    "@types/mocha": "*",
    "@types/chai": "*",
    "mocha": "*",
    "chai": "*"
  },
  "directories": {
    "test": "test"
  }
}

```

