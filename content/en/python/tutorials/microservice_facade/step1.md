---
type: docs
no_list: true
title: "Step 1. Creating the Project’s Structure"
linkTitle: "Step 1. Project’s Structure" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-python"
---

In this tutorial, we will be using a demo project to develop a small facade for a system that consists of a few microservice:

- Beacons - business logic microservice that performs the main operations of the system.
- Accounts - microservice for managing user accounts
- Passwords - microservice for managing user passwords
- Roles - microservice for managing user roles
- Sessions - microservice for processing user sessions

The Beacons microservice was demonstrated in [the Data Microservice tutorial](../../data_microservice). The rest of the microservices are from our free Pip.Services Library.


The architecture of the system looks like this:

![facade architecture diagram](/images/tutorials/microservice_facade/facade_architecture_diagram2.jpg)

The facade microservice will be responsible for:

- registering new users;
- authorizing users and creating sessions for them;
- checking whether or not a session has expired when an authorized user makes another request (session restoration);
- providing access to the functionality of the Beacons microservice for authorized users.

Before starting, be sure to set up your [environment](../../../quickstart/setup_enviroment) and create a folder for the project. The directory structure of facade projects differs a bit from the structure we use when developing data microservices.

TODO: complete this and other steps

<span class="hide-title-link">

### [Step 2. Designing a Direct Client.](../step2)

</span>