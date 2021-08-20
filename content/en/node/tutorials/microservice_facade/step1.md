---
type: docs
no_list: true
title: "Step 1. Creating the Project’s Structure"
linkTitle: "Step 1. Project’s Structure" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-node"
---

In this tutorial, we will be using a demo project to develop a small facade for a system that consists of a few microservices:

- Beacons - business logic microservice that performs the main operations of the system.
- Accounts - microservice for managing user accounts
- Passwords - microservice for managing user passwords
- Roles - microservice for managing user roles
- Sessions - microservice for processing user sessions

The Beacons microservice was demonstrated in the [Data Microservice](../../data_microservice)  tutorial. The rest of the microservices are from our free Pip.Services Library.


The architecture of the system looks like this:

![facade architecture diagram](/images/tutorials/microservice_facade/facade_architecture_diagram1.png)

The facade microservice will be responsible for:

- registering new users;
- authorizing users and creating sessions for them;
- checking whether or not a session has expired when an authorized user makes another request (session restoration);
- providing access to the functionality of the Beacons microservice for authorized users.

Before starting, be sure to set up your [environment](../../../getting_started/setup_environment) and create a folder for the project. The directory structure of facade projects differs a bit from the structure we use when developing data microservices.

```
/bin
/config
/docker
/test
└───/fixture
└───/services
    └───/version1
/src
└───/build
└───/container
└───/operations
    └───/version1
└───/services
    └───/version1

/package.json
/tsconfig.json
```

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

Install all necessary modules using the command:

```bash
npm install
```

Create a TypeScript compiler configuration file with the following lines:

**/tsconfig.json**

```json
{
    "compilerOptions": {
	"declaration": true,
        "module": "commonjs",
        "target": "es6",
        "noImplicitAny": false,
        "outDir": "obj",
        "rootDir": ".",
        "sourceMap": true,
	"types": ["node", "mocha", "chai"]
     },
    "exclude": [
        "node_modules",
        "lib",
        "dist",
        "obj",
        "temp"
    ]
}

```

Now our project is ready for development. Continue on to [Step 2 - Business operations](../step2) to start implementing the facade itself.


<span class="hide-title-link">

### [Step 2. Designing a Direct Client](../step2)

</span>
