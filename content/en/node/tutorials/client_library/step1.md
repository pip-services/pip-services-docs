---
type: docs
no_list: true
title: "Step 1. Setting up the project structure"
linkTitle: "Step 1" 
---

Let’s do some small preparation of the project before we start writing the client library.

First, create the following directory structure to keep the source organized:

<script>


</script>

<div class='col row'>
  <div class='col'>Node.js</div>
  <div class='col'>.NET</div>
  <div class='col'>Python</div>
  <div class='col'>Java</div>
  <div class='col'>Go</div>
<div>

<span id='node-code'>

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

</span>

<span id='net-code'>

```
net
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

</span>

<span id='go-code'>

```
go
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

</span>


<span id='dart-code'>

```
dart
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

</span>


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

