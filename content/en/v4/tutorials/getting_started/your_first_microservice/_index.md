---
type: docs
no_list: true
title: "Your First Microservice"
linkTitle: "Your First Microservice"
weight: 1
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

So, let's start developing microservices using the Pip.Services toolkit. As a simple example, we will make a Hello World microservice, which will greet you in response to your request. The communication protocol will be HTTP REST.

The microservice is structurally made up of these components:

- The service, which generates responses to requests
- A REST controller for the transmission of responses and requests
- The component factory for the dynamic creation of components
- A container process, which will be filled with the necessary components, based on a yaml file configuration.

### Step 1. Environment setup

Before we can start writing-up some microservices, we'll need to install:

#### Compiler and IDE

First and foremost - we'll need a compiler for your programming language of choice, as well as some sort of code editor. In our examples, we usually use Visual Studio Code, but any fitting IDE will do.


{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


### Step 2. Project setup
Create a folder for the project and within it, add a requirements.txt file with the name of your microservice and a list of dependencies for your necessary components. For editing, you can use any text editor or IDE of your choice.

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code3_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}




### Step 3. Service
The service will be a simple class that implements a single business method, which receives a name and generates a greeting. In general, business methods can call other built-in controllers or work with a database.

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code4_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Step 4. REST controller
One of the most popular ways of transferring data between microservices is using the synchronous HTTP REST protocol. The HelloWorldRestController will be used to implement an external REST interface. This component extends the abstract RestController of the Pip.Services toolkit, which implements all the necessary functionality for processing REST HTTP requests.


{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code5_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


Using this descriptor, the base class will be able to find a reference to the service during component linking. Check out [The Locator Pattern](https://www.geeksforgeeks.org/service-locator-pattern/) for more on how this mechanism works.

We also need to set a base route in the controller's constructor using the _base_route property. As a result, the microservice's full REST request will look something like:

```GET /hello_world/greeting?name=John```

Full listing for the REST controller can be found in the following file:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code6_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Step 5. Component factory
When a microservice is being populated by components based on the configuration being used, it requires a special factory to create components in accordance with their descriptors. The HelloWorldControllerFactory class is used for just that, as it extends the Factory class of the Pip.Services toolkit.


{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code7_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

### Step 6. Container
Last but not least, our microservice needs a container component. This component creates all of the other components, links them with one another, and controls their life cycle. Although there exist many different ways of running a microservice in a container (regular classes, serverless functions, serlets, etc), we'll be running our example microservice as a system process. To do this, we'll make the HelloWorldProcess extend the ProcessContainer class of the Pip.Services toolkit.

Although containers can be populated by components manually, we'll be using dynamic configuration to do this. By default, ProcessContainer reads the configuration from an external config.yaml file. All we have left to do is register the factory for creating components from their descriptors.

The full listing of the container's code can be found in the file:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code8_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

The dynamic configuration is defined in the file:

**‍/config.yaml**

```yml
---
# Container context
- descriptor: "pip-services:context-info:default:default:1.0"
  name: "hello-world"
  description: "HelloWorld microservice"
     
# Console logger
- descriptor: "pip-services:logger:console:default:1.0"
  level: "trace"
     
# Performance counter that post values to log
- descriptor: "pip-services:counters:log:default:1.0"
     
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"
     
# Shared HTTP Endpoint
- descriptor: "pip-services:endpoint:http:default:1.0"
  connection:
    protocol: http
    host: 0.0.0.0
    port: 8080
     
    # HTTP Service V1
- descriptor: "hello-world:service:http:default:1.0"
     
# Heartbeat service
- descriptor: "pip-services:heartbeat-service:http:default:1.0"
     
# Status service
- descriptor: "pip-services:status-service:http:default:1.0"

```

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

As you may have noticed, more than half of the components are being taken from Pip.Services and used "right out of the box". This significantly expands our microservice's capabilities, with minimal effort on our part.

### Step 7. Run and test the microservice
We'll need a special file to run the microservice. All this file does is creates a container instance and runs it with the parameters provided from the command line.

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code9_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

When a microservice starts up, the following sequence of events takes place:

1. A container is created and started;

2. The container reads the configuration found in config.yaml;

2. Using the factory, the container creates the necessary components in accordance with their descriptors (see [Process Container](../../tutorials/beginner_tutorials/containers/process_container));

4. The components are configured. During this step, all components that implement the IConfigurable interface have their configure methods called with the configuration defined in config.yaml passed as a parameter (see [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/));

5. Components are linked. All components that implement the IReferenceable interface get their setReferences methods called with a list of components available in the container. With the help of descriptors, objects can find all necessary dependencies (see [The Component References](../../tutorials/beginner_tutorials/component/component_references));

6. Components with active processes are run. A component is considered to contain active processes if it implements the IOpenable interface and has an open method defined (see [The Component Lifecycle](../../tutorials/beginner_tutorials/component/component_lifecycle/)).

When the microservice receives a signal to stop the process, the reverse sequence takes place:

1. Components with active processes are closed - classes implementing the IClosable interface get their close methods called;
Components are unlinked. All components that implement the IUnreferenceable interface have their unsetReferences methods called;
2. The components previously created in the container are destroyed;
3. The container is stopped.

To start the microservice, run the following command from a terminal:

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code10_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}

If the microservice started up successfully, you should see the following result in the terminal:

```
[echo:INFO:2024-04-26T15:15:30.284Z] Press Control-C to stop the microservice...
[echo:DEBUG:2024-04-26T15:15:30.542Z] Opened REST service at http://0.0.0.0:8080
[echo:INFO:2024-04-26T15:15:30.542Z] Container hello-world started.
```

Test the microservice by requesting the following URL in a browser:

```http://localhost:8080/hello_world/greeting?name=John```

If all's well, you should get the following string as a result:

```Hello, John!```

All source codes are available on [GitHub](https://github.com/pip-services-samples).

To learn even more about Pip.Services, consider creating a [Data Microservice](../../getting_started/tutorials/data_microservice/) as your next step!
