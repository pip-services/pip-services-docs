---
type: docs
no_list: true
title: "Microservice Facade"
linkTitle: "Microservice Facade" 
gitUrl: "https://github.com/pip-services-samples"
weight: 40
---
---

### Introduction

A Facade is a microservice that serves as a point of entry to a system for external clients. The facade provides a stable external interface and hides the inner workings of a system. All requests made by external clients first arrive at the facade, which then forwards them to the appropriate microservices. The facade can also implement additional functionality, such as: authenticating and authorizing users, caching and aggregating requests, logging, etc.

Microservice-based systems change quickly and chaotically. During development, the relationships between microservices can usually be tracked and fixed as needed. When intentional and/or accidental changes to an interface are rolled out to production though, they can break external clients and lead to serious business problems. This is why it's so critical to have a facade, providing a stable interface, by hiding any and all internal changes.

Oftentimes, developers use 3rd party API gateways to implement an external interface. This approach isn't half bad and does have certain advantages, such as faster development time, existing documentation, and integration with cloud services. However, 3rd party API gateways bring along considerable limitations and are extremely inconvenient for test system deployment. Because of this, additional facade implementations still make sense, even when using API Gateways.

Routing requests is one of the key functions of a facade. Some API calls can simply be redirected to the appropriate service. However, a facade doesn't stop at just routing requests. Oftentimes there occurs the need to perform complex requests, when data must be extracted from a number of microservices, aggregated in the facade, and sent to the client as one object. This approach significantly simplifies the development of clients and speeds up the process of receiving data. For example: a mobile app can make a request to the facade, which extracts order data from various services, and send an already aggregated response.

Facades can also be used to switch between protocols. For example: HTTP/RESTful, being one of the most popular external client protocols, can be used between the service and the client, while intra-microservice communication might utilize REST, gRPC, asynchronous messages, etc.

A facade can additionally be used for the following:

- Authentication — verifying the identity of the user making the request; 
- Authorization — making sure that a client is allowed to perform a certain operation;
- Limiting the frequency of request — controlling how many request a certain client (or all clients together) can make per - second;
- Caching — caching responses to reduce the number of requests actually being made to services;
- Analytics — collecting API usage statistics for analytics that can be used for billing;
- Keeping a request journal — writing requests to a journal.


The general architecture of a system that uses a facade is presented in the diagram below:

![facade architecture diagram](/images/tutorials/microservice_facade/facade_architecture_diagram1.svg)


Large systems that have a vast external interface might include a number of facades, each of which provides a logically isolated API. Moreover, specialized facades can be developed for specific clients, providing operations that are optimized for a specific user interface.

### Creating a Facade 

In this tutorial, we will be taking a look at how to implement a simple facade that will provide a versioned external API for the microservice implemented in [the Data Microservice](../data_microservice) tutorial. Additionally, our facade will implement client authentication and authorization using microservices from the Pip.Services Library.

To make it easier to follow along, this tutorial is broken up into the following steps:

- [Step 1. Setting up the environment](step0)
- [Step 2. Creating the project's structure](step1)
- [Step 3. Business operations](step2)
- [Step 4. Authentication and sessions](step3)
- [Step 5. Authorization](step4)
- [Step 6. Service and versioning](step5)
- [Step 7. Testing of operations](step6)
- [Step 8. Running the facade](step7)
- [Step 9. Manually Testing the Facade](step8)

The code for this tutorial can be found on [GitHub (facade-sample-*)](https://github.com/pip-services-samples/).

To start developing your first facade, head on over to [Step 1. Setting up the environment.](step0)


<span class="hide-title-link">

#### [Step 1. Setting up the environment](step0)
#### [Step 2. Creating the project's structure](step1)
#### [Step 3. Business operations](step2)
#### [Step 4. Authentication and sessions](step3)
#### [Step 5. Authorization](step4)
#### [Step 6. Service and versioning](step5)
#### [Step 7. Testing of operations](step6)
#### [Step 8. Running the facade](step7)
#### [Step 9. Manually Testing the Facade](step8)

</span>
