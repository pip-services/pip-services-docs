---
type: docs
no_list: true
title: "Step 1. Creating the Project’s Structure"
linkTitle: "Step 1. Project’s Structure" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-python"
---

In this tutorial, we will be using a demo project to develop a small facade for a system that consists of a few microservices:

- Beacons - business logic microservice that performs the main operations of the system.
- Accounts - microservice for managing user accounts
- Passwords - microservice for managing user passwords
- Roles - microservice for managing user roles
- Sessions - microservice for processing user sessions

The Beacons microservice was demonstrated in [the Data Microservice tutorial](../../data_microservice). The rest of the microservices are from our free Pip.Services Library.


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
        └───/src

/pip_facades_sample_python
└───/build
└───/container
└───/operations
    └───/version1
└───/services
    └───/version1
/requirements.txt
/setup.py
```

Create a requirements.txt file at the root of the project with the following content to configure dependencies and project parameters:

**/requirements.txt**

```
iso8601
PyYAML
pystache
pytest
pytz
bottle
requests
cheroot
beaker
netifaces==0.10.9
pip-services3-commons
pip-services3-components
pip-services3-container
pip-services3-rpc
```

Install all necessary modules using the command:

```bash
pip install -r requirements.txt
```

Now our project is ready for development. Continue on to [Step 2 - Business operations](../step2) to start implementing the facade itself.


<span class="hide-title-link">

### [Step 2. Designing a Direct Client](../step2)

</span>
