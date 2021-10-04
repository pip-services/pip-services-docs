Create a /package.json file at the root of the project with the following content to configure dependencies and project parameters:

**/package.json**

```json
{
  "name": "pip-data-microservice-node",
  "version": "1.0.0",
  "main": "./obj/src/index.js",
  "typings": "./obj/src/index.d.ts",
  "scripts": {
    "test": "mocha -t 5000 -R spec -u tdd --recursive ./obj/test"
  },
  "dependencies": {
    "pip-services3-commons-node": "^3.0.6",
    "pip-services3-components-node": "^3.0.7",
    "pip-services3-container-node": "3.0.*",
    "pip-services3-data-node": "^3.1.0",
    "pip-services3-mongodb-node": "^3.3.0",
    "pip-services3-rpc-node": "^3.2.4"
  },
  "devDependencies": {
    "@types/async": "^2.0.49",
    "@types/chai": "^4.1.3",
    "@types/lodash": "^4.14.109",
    "@types/mocha": "^5.2.1",
    "@types/node": "^10.3.0",
    "chai": "^4.1.2",
    "mocha": "^5.2.0",
    "restify": "^4.3.0",
    "pip-data-microservice-node": "git+https://github.com/pip-services-samples/pip-services-beacons-node.git"
  }
}

```

