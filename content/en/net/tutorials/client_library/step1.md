---
type: docs
no_list: true
title: "Step 1. Setting up the project structure"
linkTitle: "Step 1. Setting up" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-dotnet"
---

Let’s do some small preparation of the project before we start writing the client library.

First, create the following directory structure to keep the source code organized:

```
/src
└───/version1
/test
└───/version1

```

Prepare the initial project files, as described in the tutorial on [creating a data microservice](../../data_microservice), for the language of your choice and perform the initialization process.


Since data is transferred between the client and the microservice using a specific protocol, this data must be defined for the client to work correctly. Some developers prefer to export general data structures, define external interfaces in a separate library, and use it on the client and on the server. However, to minimize the amount of libraries and simplify dependencies, we prefer to just copy the data structure from the microservice to the client library. This won’t cause any additional problems, since after changing the external interface, the client should be updated and retested anyways. 


Copy the files from the microservice’s data folder into the **src/data/version1** folder of our client project. The microservice’s source code can be found at the following [link](https://github.com/pip-services-samples/service-beacons-dotnet)

For “strongly typed” languages (e.g. Dart), you’ll have to import the data model files from the microservice using the import directive, instead of just copying the directory over. This will guarantee an exact type match.

Now we’re ready to start writing our client library. When you’re ready, continue on to [Step 2. Designing a Direct Client.](../step2)

<span class="hide-title-link">

### [Step 2. Designing a Direct Client.](../step2)

</span>
