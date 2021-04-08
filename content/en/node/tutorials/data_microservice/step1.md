---
type: docs
no_list: true
title: "Step 1. Setting up the project"
linkTitle: "Step 1" 
---

Before we start actually writing our microservice, we need to first set up our environment and create a directory structure in the project’s folder.

To set up our environment, we’ll need to install all the necessary tools, as described on the [Setup environment](../quick_start/setup_enviroment) page.

Don’t forget to select the programming language that you plan on using.

Create a folder for the project and, inside it, a directory structure to match the one below:

```
/bin
/config
/docker
/src
└───/build
└───/container
└───/data
│   └───/version1
└───/logic
└───/persistence
└───/service
    └───/version1
/test
└───/logic
└───/persistence
└───/service
    └───/version1

```

Add a package.json file with the following lines to the root of the project’s folder:

**/package.json**

```json
{
  "name": "beacons",
  "version": "1.0.0",
  "main": "./obj/src/index.js",
  "typings": "./obj/src/index.d.ts",
  "scripts": {
    "test": "mocha -t 5000 -R spec -u tdd --recursive ./obj/test"
  },
  "dependencies": {
    "pip-services3-commons-node": "^3.0.*",
    "pip-services3-components-node": "^3.0.*",
    "pip-services3-container-node": "3.0.*",
    "pip-services3-data-node": "^3.0.*",
    "pip-services3-rpc-node": "^3.0.*",
    "pip-services3-mongodb-node": "^3.0.*"
  },
  "devDependencies": {
    "@types/async": "^2.0.49",
    "@types/chai": "^4.1.3",
    "@types/lodash": "^4.14.109",
    "@types/mocha": "^5.2.1",
    "@types/node": "^10.3.0",
    "chai": "^4.1.2",
    "mocha": "^5.2.0",
    "restify": "^4.3.0"
  }
}
```

To install all necessary dependencies, run the following command from a terminal at the root of the project’s directory:

```bash
npm install
```

Now that we’ve got the project all set up, we can move on to [Step 2. Data model development.](../step2)

