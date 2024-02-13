---
type: docs
no_list: true
title: "Client Library"
linkTitle: "Client Library" 
gitUrl: "https://github.com/pip-services-samples"
weight: 30
---

### General considerations

Knowing how to create a client library for your microservice is almost as important as knowing how to create the microservice itself. Some people question whether or not client libraries are actually necessary, and say that it's enough to just describe the external interface and let the users of the microservice implement their own interaction protocol.

![Client Library Diagram](./figure1.svg)

We strongly recommend the use of client libraries due to the following:

- Client libraries are created once and can be used by all users of the microservice, which significantly reduces development time.
- In addition to providing a ready interaction protocol, client libraries can also contain well written mocks. These allow users to cut off dependencies to the actual microservice and use its local mock replacement for unit tests.

To avoid running into problems, we recommend following the rules below:

- The microservices external interface should use interoperable protocols and be well documented. This is done so that, if the need occurs (e.g. no clients exist for a new programming language), users of the microservice would be able to create a client on their own
- It's necessary to keep to the principle of "smart endpoints - dumb pipes". I.e. client libraries shouldn't contain any business logic. All business logic should be implemented in the microservice itself, to avoid ending up with multiple implementations that unexpectedly start conflicting with each other.
- The only exception to the previous rule is optimizing requests to the server and providing a client API that is more convenient than the one that is supported on the protocol's level.
- The number of external dependencies should be minimized in client libraries. The use of 3rd party libraries is acceptable only if they lack conflicting versions and provide complete backwards compatibility. Otherwise, client libraries that are written using conflicting versions of 3rd party libraries will start getting in each other's way, when used in the same process. This rule is applicable to most programming languages, like .NET, Java, and Golang. The Pip.Services Toolkit fully complies with this rule and can safely be used to write client libraries.

As we mentioned earlier, it's highly recommended to implement mock versions of clients, as well as random data generators for simplifying the process of writing unit tests. And all mock clients should be tested using the same tests that are used to test the real clients, to exclude any and all differences in their implementation.


### Creating your client library

The client library that we will be creating in this tutorial is for the microservice described in the [Data microservice](../data_microservice) tutorial. To better understand the client's logic, it's a good idea to familiarize yourself with that tutorial first, if you haven't done so already. 
To make it easier to follow along, we've broken up the tutorial on writing your first client library into the following steps:

- [Step 1. Setting up the environment](step0)
- [Step 2. Setting up the project structure](step1)
- [Step 3. Designing a Direct Client](step2)
- [Step 4. Designing an HTTP Client](step3)
- [Step 5. Implementing a Mock client (with tests)](step4)
- [Step 6. Testing HTTP client with a Remote Microservice](step5)

<span class="hide-title-link">

#### [Step 1. Setting up the environment](step0)
#### [Step 2. Setting up the project structure](step1)
#### [Step 3. Designing a Direct Client](step2)
#### [Step 4. Designing an HTTP Client](step3)
#### [Step 5. Implementing a Mock client](step4)
#### [Step 6. Testing the Client with a Remote Microservice](step5)

</span>

Let's get started! Head on over to [Step 1. Setting up the project structure](step1).

### See also

- [Microservice Facade](../microservice_facade)
- [Microservice Dockerization](../microservice_dockerization)

<span class="hide-title-link">

#### [Microservice Facade](../microservice_facade)
#### [Microservice Dockerization](../microservice_dockerization)

</span>
