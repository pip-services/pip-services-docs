---
type: docs
no_list: true
title: "Step 5. Authorization"
linkTitle: "Step 5. Authorization" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-python"
---

Once we’ve established who our user is, we need to implement some way of controlling what operations our user can perform, based on the rights he/she has been assigned. In this tutorial, we will be taking a look at how to install access limitations that are based on user roles. The roles themselves are stored in the Roles microservice and are loaded into a UserSession by the loadSession interceptor we discussed in the previous step.

Our Authorizer class was made to provide flexible access management. We will be using this class to limit access to certain operations in our facade’s RESTful services. This class’s implementation can be found in the **Authorize.py** file, located in the folder **services/version1**. Its code is as follows:

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
  {{< include "/content/en/toolkit/tutorials/microservice_facade/__code7_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/microservice_facade/__code7_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  Not available   
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/microservice_facade/__code7_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>
Let’s take a closer look at each of these methods:


- anybody - allows everyone access, even unauthorized users.
- signed - access is granted only to authorized users.
- admin - access is granted only to users with the Administrator role.
- owner - access is granted only for the session owner.


The logic pretty much boils down to making a decision about whether we should allow further access, or send an answer with the corresponding error. In case of the latter, the error is based on the information provided by the clients and the information about the user that is embedded into the interceptor’s request for the active session.


Setting specific access levels to certain resources is configured when registering routes in the service. The service’s implementation is described in [Step 6 - REST services and versioning](../step5).

<span class="hide-title-link">

### [Step 6 - REST services and versioning](../step5)

</span>
