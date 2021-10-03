---
type: docs
no_list: true
title: "Step 4. Designing an HTTP Client"
linkTitle: "Step 4. HTTP Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-python"
---

The standard way of communicating with a microservice is via the HTTP protocol. It allows calling microservices that work on a separate server, or in their own container. Our example microservice uses a simplified version of the HTTP protocol that is automatically generated using the Commandable pattern.    
    
Then, creates a new class for the Commandable REST client and an implementation for each of the microservice’s methods. This is done by calling the REST API’s methods using the methods of the parent Commandable REST client, passing the necessary set of parameters, and then processing the response’s result. Since the answer from the client is returned as JSON, some programming languages will require that you first convert it to an instance with a specific type. Be sure to remember this when writing your HTTP clients.

The client’s resulting code is listed below:

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
  {{< include "/content/en/toolkit/tutorials/client_library/__code4_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code4_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code4_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code4_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>

To be sure that our code works as intended, we should perform some functional testing. Test the Commandable HTTP REST client using the class with tests that we developed in the previous step. To do this, create an instance of the HTTP REST client and pass it as a parameter to our set of tests.
An example implementation of the tests can be found in the example’s [repository](https://github.com/pip-services-samples/client-beacons-python/blob/master/test/version1/test_BeaconsHttpClient.py)

All tests should pass successfully.This finishes the development of our clients. As a result, we ended up with 2 clients: one for working from within a monolithic application, and another for working with the microservice from a different application, when utilizing a distributed architecture.

To simulate the service, let's create a test client in [Step 5. Implementing a Mock Client.](../step4)


<span class="hide-title-link">

### [Step 5. Implementing a Mock Client.](../step4)

</span>
