---
type: docs
no_list: true
title: "Step 6. Implementing an HTTP service"
linkTitle: "Step 6. HTTP service" 
gitUrl: "https://github.com/pip-services-samples/service-beacons-python"
---

The Pip.Services Toolkit has a dedicated component in the RPC module for processing external requests. To make use of this service, create a new class `BeaconsHttpServiceV1`, extending the `CommandableHttpService` class:

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
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code16_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code16_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code16_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code16_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>



The `CommandableHttpService` class from the pip-services3-rpc module implements all of the basic functionality needed by the service, right out of the box. All that we need to do on our side is configure it in the child class. This is done by defining a base route to the API (e.g. 'v1/beacons') and by setting references to the controller. The rest is taken care of by the parent class and the process container: a controller will be searched for and referenced, after which the service will receive a set of commands, register it, and make those commands available through the API interface. This allows us to run commands by simply posting requests to a URL of the following format:

```
http://{ip}:{port}/v1/beacons/{command_name}
```

Even though the `BeaconsHttpServiceV1` class barely has any lines of code, there’s a large amount of code being executed in the service itself. To make sure that everything is working as it should, we should add tests for the service itself, as well as for the commands we wrote in the CommandSet. Create a file for the service’s test and paste the following code:

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
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code17_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code17_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code17_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code17_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


Run the `python test.py` command and make sure that all of the tests pass successfully.

Congratulations! This step finishes off the development of our microservice! However, before we can start our service up as a fully fledged microservice, we’ll first need to compose all of its components using a process container. And that’s exactly what we’ll be doing in [Step 7. Wrapping microservice into container.](../step6)


<span class="hide-title-link">

### [Step 7. Wrapping the microservice into a container.](../step6)

</span>
