---
type: docs
no_list: true
title: "Your first microservice in Python (test)"
linkTitle: "Your first microservice (test)"
weight: 30
---

So, let’s start developing microservices using the Pip.Services toolkit. As a simple example, we will make a Hello World microservice, which will greet you in response to your request. The communication protocol will be HTTP REST.

The microservice is structurally made up of these components:

- The controller, which generates responses to requests
- A REST service for the transmission of responses and requests
- The component factory for the dynamic creation of components
- A container process, which will be filled with the necessary components, based on a yaml file configuration.

### Step 1. Project setup
Create a folder for the project and within it, add a requirements.txt file with the name of your microservice and a list of dependencies for your necessary components. For editing, you can use any text editor or IDE of your choice.

<div class="btn-group" role="group" aria-label="Lnguage selector">
  <button id="select-node" type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
  <button id="select-dotnet" type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
  <button id="select-golang" type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
  <button id="select-dart" type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
  <button id="select-python" type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
  <button id="select-java" type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
</div>

<div  id="node">
 Node.js code 
</div>
<div id="dotnet">
  Dotnet code
</div>
<div id="golang">
Golang code  
</div>

<div id="dart">

Dart code

</div>

<div id="python">

Python code

</div>

<div id="java">

Java code

</div>

### Step 2. Controller
The controller will be a simple class that implements a single business method, which receives a name and generates a greeting. In general, business methods can call other built-in services or work with a database.
