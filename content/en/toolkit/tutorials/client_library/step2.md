---
type: docs
no_list: true
title: "Step 3. Designing a Direct Client"
linkTitle: "Step 3. Direct Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-python"
---

Oftentimes systems that are created using a microservices architecture end up being assembled and installed as monoliths. Sometimes this is required as a transitional step, when the operations department isn’t quite yet ready to install and support such a fragmented system. It’s also common for startups, who usually have to deal with limited financial resources, to use this approach. Packing a large amount of microservices into a monolith allows teams to significantly reduce the amount of containers needed to get the system up and running. Such a system can easily be broken up into microservices in the future, when the startup is ready to support an increasing number of clients.

Direct clients are key to creating microservice-based monoliths. A direct client uses direct calls to the microservice’s controller from the shared address space, bypassing external interfaces in the process. On this step, we are going to create such a client. We’ll be placing our code in the **src/version1** folder.

First off, let's define an interface for our clients to implement. This interface should contain a list of all the methods that are provided by our microservice’s API. As a result, we get the following code:

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
  {{< include "/content/en/toolkit/recipes/mongodb_persistence/__code2_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/mongodb_persistence/__code2_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/mongodb_persistence/__code2_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/mongodb_persistence/__code2_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

Let’s start writing our direct client. This will be a class that implements the interface we defined above, that has our controller set as a dependency in the controller, and that will call the controller’s methods when asked to. To learn more about the referencing and linking mechanisms, be sure to read [The Referenceable Recipes](../../../recipes/component_references/). Ultimately, this will just be a wrapper class for the container. 
The direct client’s code is listed below:

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
  {{< include "/content/en/toolkit/recipes/mongodb_persistence/__code3_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/mongodb_persistence/__code3_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/mongodb_persistence/__code3_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/recipes/mongodb_persistence/__code3_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


Now that we’re done writing the client, we should test it. 
To be sure that our code works as intended, we need to perform some functional testing. Let’s start with creating, in a separate class, a set of tests that will be common to all our clients. This will help us simplify the process of testing multiple clients, as well as make sure that they all work the same. We’ll place the code for our tests in the **test/version1** folder. The code for this class can be found in the [repository](https://github.com/pip-services-samples/client-beacons-python/blob/master/test/version1/BeaconsClientV1Fixture.py).


Now, let’s test the direct client. To do this, create an instance of the direct client and pass it as a parameter to our set of tests. 
An example implementation of the tests can be found in the example’s [repository](https://github.com/pip-services-samples/client-beacons-python/blob/master/test/version1/test_BeaconsDirectClientV1.python)


Run the tests using the testing methods that are standard for the programming language you are using. All tests should pass successfully.This finishes the development of the Direct client.
Move on to [Step 4. Designing an HTTP Client](../step3).


<span class="hide-title-link">

### [Step 4. Designing an HTTP Client](../step3)

</span>
