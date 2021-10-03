---
type: docs
no_list: true
title: "Step 4. Implementing persistence components"
linkTitle: "Step 4. Persistence"
gitUrl: "https://github.com/pip-services-samples/service-beacons-python"
---

In this step, we’ll be creating components for persisting the data model we defined in the previous step. In our projects, we always create at least two persistences: one for storing data in-memory (used for testing), and another for storing data in an external database (used in production). With the Beacons example, we’ll be doing the same.

Let’s start by navigating to the **src** directory and creating a **persistence** directory inside it. This directory is going to contain all of the files that relate to this step of the tutorial.

The first thing we are going to do is define what functionality our persistent storage should have. We can define these in a form of an interface and name it `IBeaconsPersistence`

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
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code7_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code7_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code7_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code7_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>



The first persistence to implement this interface will be the memory persistence, which we will name **BeaconsMemoryPersistence**. This class will need to extend the `IdentifiableMemoryPersistence` class from the **pip-services3-data** module, and have a few additional functions added to it. One of these functions will be used to create filters for the `get_page_by_filter` method that we’re going to override from the parent class. This function will be called `__compose_filter`, as it’s going to allow us to filter data in accordance with the received filtering parameters. The overriding `get_page_by_filter` method then simply calls the parent’s method, passing the `__compose_filter` function as a filter parameter. The second function that we will need to implement is the `get_one_by_udi` method, whose purpose will be to retrieve a beacon by its `udi`.

The resulting code for this class is listed below:

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
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code8_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code8_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code8_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code8_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


And that’s pretty much it for the memory persistence.

Now let’s move on to something a bit more sophisticated - a MongoDB persistence. Here we’re also going to use an already existing base class, `IdentifiableMongoDbPersistence`, from the **pip-services3-mongodb** module, and write a few functions, the most important of which will be `__compose_filter`. This time around, its implementation is going to contain syntax for creating database requests. The resulting code for this class is listed below: 

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
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code9_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code9_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code9_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code9_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


Let’s take a quick look at what’s in this code. A basic set of CRUD operations are already implemented in the data module. There’s minimal code that needs to be written by us as developers for this class: just a filter function, and non-standard methods for searching by a specific data field. The rest of the methods that we defined in our interface are already implemented in the parent class.

To make sure that the code does just what we expect it to do, let’s add some tests. We’ll be placing the files with our tests in the **test** directory and organizing them into subdirectories, whose names will reflect the components they are testing.

Thanks to the modular structure of microservices, each component is easily testable with the help of simple mock tests. We’ll start with creating a class that contains a set of testable commands and checks the results we receive with the help of standard testing libraries. This class will be accepting any persistence that implements our `IBeaconsPersistence` interface as a parameter. This way we can use the same set of commands to test both of our persistence implementations. This set of commands should contain standard CRUD operations, which are implemented in the parent class, as well as the methods we’ve added in the child classes.

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
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code10_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code10_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code10_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code10_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


Now that we have a set of tests, we can dive into the testing itself. To do this, we’ll create files for testing each of our persistences and run them.

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
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code11_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code11_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code11_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code11_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


To run these tests, run the command npm test from a terminal at the root of the project.

*“But where exactly is the data going to be stored when we get the service actually up and running?”* you may ask. Jumping ahead, we’ll tell you that the config.yml configuration file takes care of that. It contains configurations for all of the service’s components, such as: which logger to use, where performance counter output should be, what database to connect to and using what parameters, etc. We’ll discuss this in more detail later on in this tutorial.

Now that we can persist our data, let’s move on to [Step 5. Implementing a controller.](../step4)

<span class="hide-title-link">

### [Step 5. Implementing a controller.](../step4)

</span>
