---
type: docs
title: "Messaging"
gitUrl: "https://github.com/pip-services3-node/pip-services3-messaging-node"
no_list: true
description: > 
    Asynchronous Messaging for Pip.Services in Node.js / ES2017  

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    The Messaging module contains a set of interfaces and classes for working with message queues, as well as an in-memory message queue implementation. 
---

### Modules

The module contains the following packages:

- [**Build**](build) - in-memory message queue factory
- [**Queues**](queues) - contains interfaces for working with message queues, subscriptions for receiving messages from the queue, and an in-memory message queue implementation.
- [**Connect**](connect) - TODO: add description

### Use

Install the NPM package as
```bash
npm install pip-services3-messaging-nodex --save
```

TODO: add example

### Develop

For development you shall install the following prerequisites:
* Node.js 8+
* Visual Studio Code or another IDE of your choice
* Docker
* Typescript

Install dependencies:
```bash
npm install
```

Compile the code:
```bash
tsc
```

Run automated tests:
```bash
npm test
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

### Contacts

The Node.js version of Pip.Services is created and maintained by:
- **Volodymyr Tkachenko**
- **Sergey Seroukhov**

The documentation is written by:
- **Mark Makarychev**