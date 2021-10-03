---
type: docs
no_list: true
title: "Step 5. Implementing a Mock Client"
linkTitle: "Step 5. Mock Client" 
gitUrl: "https://github.com/pip-services-samples/client-beacons-python"
---

Complex systems usually experience difficulties when it comes to writing unit tests for a logic that calls external services. These tests are supposed to run quickly and without any additional infrastructure. The standard approach to solving this problem is to replace the calls to external services with a local approximation (a.k.a. a mock). However, writing mocks takes time and doesn’t always guarantee functionality that matches the real service.

In our projects, we’ve come to the conclusion that it pays off to develop mocks alongside the real clients and test them using common tests, to guarantee that their behavior is identical. This way, all users of the microservice will receive both the client and mock from the library and will be able to start coding logic and unit tests for it without delay.

In this step we will be demonstrating how Mock clients are developed and how they can be tested using the tests we created earlier.

The test client has to implement the same interface that the other clients did. However, the client’s methods are going to contain code that only imitates the microservice’s behavior.

The code for this client is showed below:

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
  {{< include "/content/en/toolkit/tutorials/client_library/__code5_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code5_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code5_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code5_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


Now let’s test the client we’ve created. We’ll be using the set of tests that we developed in one of the previous steps, and adding just one test file that will bring it all together. The source of this file is presented below:

**/test/version1/test_BeaconsMockClientV1.py**

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
  {{< include "/content/en/toolkit/tutorials/client_library/__code6_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code6_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code6_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code6_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


Create a file with the tests and run them. All the tests should pass, even though the server-side code wasn’t actually used anywhere.

This technique becomes very useful when developing microservices that bring together multiple microservices by means of their clients (e.g. a facade microservice). It allows us to perform functional testing without having to run the entire infrastructure.

To performing non-fuctional testing, we need to generate a large amount of realistic data. Users usually don’t know the entire data structure with all of its variations and exceptions. The next component we will be adding to our client library is a random data generator. This component can be used by the microservice’s users to create quality tests. The implementation is usually done in the form of static methods that either return an entire object, or just some part of its parameters. Let’s take a look at what an implementation of such a generator for the **BeaconsV1** data object would look like. The generator’s code is listed below:


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
  {{< include "/content/en/toolkit/tutorials/client_library/__code7_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code7_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code7_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code7_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


In this implementation, the ranges of generated values are statically set, but they can be passed as parameters to the methods and dynamically set as needed.
Using this instrument, we can easily generate large volumes of realistic data. This, in turn, can be used to test, for example, how fast the system can create elements in the persistence it’s using.

In the [Step 6. Testing the Client with a Remote Microservice](../step5), we’ll be taking a look at how to test our client using a microservice that is remotely deployed in a Docker container.


<span class="hide-title-link">

### [Step 6. Testing the Client with a Remote Microservice](../step5)

</span>
