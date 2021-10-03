---
type: docs
no_list: true
title: "Step1. Setting up the environment"
linkTitle: "Step 1. Environment setup"

---

Before we can start writing-up some microservices, we’ll need to install a few mandatory prerequisites.

### 1. Compiler and IDE

First and foremost - we’ll need a compiler for your programming language of choice, as well as some sort of code editor. In our examples, we usually use Visual Studio Code, but any fitting IDE will do.

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
  {{< include "/content/en/toolkit/tutorials/client_library/__code1_node.md" >}}  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code1_net.md" >}}    
</div>

<div class="content-tab-section">
  Not available  
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code1_dart.md" >}}    
</div>

<div class="content-tab-section">
  {{< include "/content/en/toolkit/tutorials/client_library/__code1_python.md" >}}
</div>

<div class="content-tab-section">
  Not available  
</div>

</div>


### 2.Docker and Docker Compose
To install Docker, download the Docker Desktop installer that corresponds to the operating system you’re using from the official [Docker site](https://www.docker.com/get-started). Once downloaded, launch the installer and follow the installation instructions.

Once installed, check that the installation was completed successfully by running the following commands from your console:

```bash
docker --version
```

If everything was installed successfully, the screen will display the latest version of Docker.

To install Docker Compose, follow the guideles available [here](https://docs.docker.com/compose/install/).    

Now that we’ve got the environment set up, we can move on to [Step 2. Setting up the project.](../step1)

<span class="hide-title-link">

### [Step 2. Setting up the project.](../step1)

</span>

