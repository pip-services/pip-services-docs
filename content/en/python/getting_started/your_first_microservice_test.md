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
**/package.json**

```json
{
 "name": "hello-world",
 "version": "1.0.0",
  "dependencies": {
    "pip-services-commons-node": "^3.0.*",
    "pip-services-components-node": "^3.0.*",
    "pip-services-container-node": "3.0.*",
    "pip-services-data-node": "^3.0.*",
    "pip-services-rpc-node": "^3.0.*"  
 }
}
```

In the command line, type out the command below to install the dependencies:

```bash
npm install
```
</div>
<div id="dotnet">
  
 ```bash
dotnet new console
```

This command will automatically create two files: HelloWorld.csproj and Program.cs. Open the HelloWorld.csproj file and add the necessary dependencies to it.

**/HelloWorld.csproj**

```xml
<Project Sdk="Microsoft.NET.Sdk">  
  <PropertyGroup>    
    <OutputType>Exe</OutputType>    
    <TargetFramework>netcoreapp3.1</TargetFramework>  
  </PropertyGroup>  
  <ItemGroup>    
    <PackageReference Include="PipServices3.Commons" Version="3.1.0" />    
    <PackageReference Include="PipServices3.Components" Version="3.1.0" />    
    <PackageReference Include="PipServices3.Container" Version="3.1.0" />    
    <PackageReference Include="PipServices3.Data" Version="3.1.0" />    
    <PackageReference Include="PipServices3.Rpc" Version="3.3.0" />  
  </ItemGroup>
</Project>
```

In the command line, type out the command below to install the dependencies:

```bash
dotnet restore
```
</div>
<div id="golang">
Run the following command in the command line:

```bash
go mod init quickstart
```

Update the generated /go.mod file to add there dependencies to Pip.Services toolkit.

**/go.mod**


```
module quickstart
go 1.13
require (
	github.com/pip-services3-go/pip-services3-commons-go v1.0.0
	github.com/pip-services3-go/pip-services3-components-go v1.0.2
	github.com/pip-services3-go/pip-services3-container-go v1.0.0
	github.com/pip-services3-go/pip-services3-rpc-go v1.0.0
)
```

In the command line execute the following command to install the dependencies:

```bash
go get -u
``` 
</div>

<div id="dart">

**/pubspec.yaml**

```yml
name: pip_quickstart
version: "1.0.0"
author: Anonymous <anonymouse@somewhere.com>
description: Quick start for Pip.Services toolkit on Dart
homepage: http://pipservices.org

environment:
  sdk: ">=2.0.0 <3.0.0"

dependencies:
  pip_services3_commons: ">=1.0.5 <2.0.0"
  pip_services3_components: ">=1.0.2 <2.0.0"
  pip_services3_rpc: ">=1.0.2 <2.0.0"
  pip_services3_container: ">=1.0.3 <2.0.0"
  angel_framework: ^2.1.1

dev_dependencies:
  test: '>=1.14.2 <2.0.0'
```

In the command line, type out the command below to install the dependencies:

```bash
pub get
```

Create the file:

**/lib/src/pip_quickstart.dart**

```dart
library pip_quickstart;
export './src/helloworld.dart';
```

Create a file:

**/lib/helloworld.dart**

```dart
export './HelloWorldController.dart';
export './HelloWorldProcess.dart';
export './HelloWorldRestService.dart';
export './HelloWorldServiceFactory.dart';
```

These files are necessary export classes outside the library.

</div>

<div id="python">

the external dependencies are defined in the file below:

**/requirements.txt**

```txt
iso8601 
PyYAML 
pystache 
pytest  
pytz 
bottle 
pybars3 
requests 
netifaces==0.10.9   
pip_services3_commons 
pip_services3_components 
pip_services3_container 
pip_services3_data 
pip_services3_rpc
```

To install these dependencies use the following command:

```bash
pip install -r requirements.txt
```

</div>

<div id="java">

Java code

</div>

### Step 2. Controller
The controller will be a simple class that implements a single business method, which receives a name and generates a greeting. In general, business methods can call other built-in services or work with a database.
    
To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter “__default_name”. To get the configuration, the component must implement the interface “IConfigurable” with the method “configure”.
   
More details on this mechanism can be found in [The Configuration recipe](../../recipes/configuration).

### Step 3. REST service
One of the most popular ways of transferring data between microservices is using the synchronous HTTP REST protocol. The HelloWorldRestService will be used to implement an external REST interface. This component extends the abstract RestService of the Pip.Services toolkit, which implements all the necessary functionality for processing REST HTTP requests.

Next, we’ll need to register the REST operations that we’ll be using in the class’s register method. In this microservice, we’ll only be needing to implement a single GET command: “/greeting”. This command receives a “name” parameter, calls the controller’s “greeting” method, and returns the generated result to the client.

To get a reference to the controller, we’ll add its descriptor to the _dependency_resolver with a name of “controller”.

Using this descriptor, the base class will be able to find a reference to the controller during component linking. Check out [The Locator Pattern](https://www.geeksforgeeks.org/service-locator-pattern/) for more on how this mechanism works.

We also need to set a base route in the service’s constructor using the _base_route property. As a result, the microservice’s full REST request will look something like:

```GET /hello_world/greeting?name=John```

Full listing for the REST service found in the file:

### Step 4. Component factory
When a microservice is being populated by components based on the configuration being used, it requires a special factory to create components in accordance with their descriptors. The HelloWorldServiceFactory class is used for just that, as it extends the Factory class of the Pip.Services toolkit.

<div class="btn-group" role="group" aria-label="Lnguage selector">
  <button id="select-node" type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
  <button id="select-dotnet" type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
  <button id="select-golang" type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
  <button id="select-dart" type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
  <button id="select-python" type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
  <button id="select-java" type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
</div>

<div  id="node">
	  
</div>

<div  id="dotnet">
	  
</div>

<div  id="golang">
	  
</div>
	  
<div  id="dart">
	  
</div>

<div  id="python">
	  
</div>

<div  id="java">
	  
</div>	  
	  
### Step 5. Container
Last but not least, our microservice needs a container component. This component creates all of the other components, links them with one another, and controls their life cycle. Although there exist many different ways of running a microservice in a container (regular classes, serverless functions, serlets, etc), we’ll be running our example microservice as a system process. To do this, we’ll make the HelloWorldProcess extend the ProcessContainer class of the Pip.Services toolkit.

Although containers can be populated by components manually, we’ll be using dynamic configuration to do this. By default, ProcessContainer reads the configuration from an external config.yml file. All we have left to do is register the factory for creating components from their descriptors.
	  
<div class="btn-group" role="group" aria-label="Lnguage selector">
  <button id="select-node" type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
  <button id="select-dotnet" type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
  <button id="select-golang" type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
  <button id="select-dart" type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
  <button id="select-python" type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
  <button id="select-java" type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
</div>

<div  id="node">
	  
</div>

<div  id="dotnet">
	  
</div>

<div  id="golang">
	  
</div>
	  
<div  id="dart">
	  
</div>

<div  id="python">
	  
</div>

<div  id="java">
	  
</div>
Looking at the configuration file, we can conclude that the following components will be created in the microservice:

- [ContextInfo](../../components/info/context_info) - standard Pip.Services component for determining the name and description of a microservice.
- [ConsoleLogger](../../components/log/console_logger) - standard Pip.Services component for writing logs to stdout,
- [LogCounters](../../components/count/log_counters) - standard Pip.Services component for logging performance counters.
- HelloWorldController - the controller of our microservice, implemented in step 2. Make note of the controller’s descriptor, as it will be used to link the controller class to the REST service.
- [HttpEndpoint](../../rpc/services/http_endpoint) - standard Pip.Services component that allows multiple services to use a single HTTP port simultaneously.
- HelloWorldRestServices - the REST service we implemented on step 3.
- [HeartbeatRestService](../../rpc/services/heartbeat_rest_service) - standard Pip.Services component that is used to check whether or not a microservice is still up and running by calling GET /heartbeat.
- [StatusRestService](../../rpc/services/status_rest_service/) - standard Pip.Services component for getting the status of a microservice by calling GET /status.

As you may have noticed, more than half of the components are being taken from Pip.Services and used “right out of the box”. This significantly expands our microservice’s capabilities, with minimal effort on our part.
