---
type: docs
no_list: true
title: "Step 2. Creating the Project’s Structure"
linkTitle: "Step 2. Project’s Structure" 
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

Before starting, create a folder for the project. The directory structure of facade projects differs a bit from the structure we use when developing data microservices.

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


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/microservice_facade/__code2_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/microservice_facade/__code2_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available   
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/microservice_facade/__code2_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>
Install all necessary modules using the command:


<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/microservice_facade/__code3_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/microservice_facade/__code3_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available   
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/microservice_facade/__code3_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

Now our project is ready for development. Continue on to [Step 3 - Business operations](../step2) to start implementing the facade itself.


<span class="hide-title-link">

### [Step 3. Designing a Direct Client](../step2)

</span>
