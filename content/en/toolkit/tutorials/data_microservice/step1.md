---
type: docs
no_list: true
title: "Step 2. Project structure"
linkTitle: "Step 2. Project structure" 
gitUrl: "https://github.com/pip-services-samples/service-beacons-python"
---

Before we start actually writing our microservice, we need to create a directory structure in the project’s folder.

Create a folder for the project and, inside it, a directory structure to match the one below:

```
/bin
/config
/docker
/src
└───/build
└───/container
└───/data
│   └───/version1
└───/logic
└───/persistence
└───/service
    └───/version1
/test
└───/logic
└───/persistence
└───/service
    └───/version1

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
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code2_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code2_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code2_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code2_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


To install all necessary dependencies, run the following command from a terminal at the root of the project’s directory:


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
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code3_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code3_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code3_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/data_microservice/__code3_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>



Now that we’ve got the project all set up, we can move on to [Step 3. Data model development.](../step2)

<span class="hide-title-link">

### [Step 3. Data model development.](../step2)

</span>
