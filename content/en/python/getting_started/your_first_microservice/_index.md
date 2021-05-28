---
type: docs
no_list: true
title: "Your first microservice in Python"
linkTitle: "Your first microservice"
weight: 30
---

So, let’s start developing microservices using the Pip.Services toolkit. As a simple example, we will make a Hello World microservice, which will greet you in response to your request. The communication protocol will be HTTP REST.

The microservice is structurally made up of these components:

- The controller, which generates responses to requests
- A REST service for the transmission of responses and requests
- The component factory for the dynamic creation of components
- A container process, which will be filled with the necessary components, based on yml configuration.

### Step 1. Project setup
Create a folder for the project and within it, add a requirements.txt file with the name of your microservice and a list of dependencies for your necessary components. For editing, you can use any text editor or IDE of your choice.


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

In the command line, type out the command below to install the dependencies:

```bash
pip install -r requirements.txt
```

### Step 2. Controller
The controller will be a simple class that implements a single business method, which receives a name and generates a greeting. In general, business methods can call other built-in services or work with a database.

```python
def greeting(name):        
    return f"Hello, {name if name is not None else self.__defaultName} !"
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter “__default_name”. To get the configuration, the component must implement the interface “IConfigurable” with the method “configure”.

```python
def configure(config):        
    self.__default_name = config.get_as_string_with_default("default_name", self.__default_name)
```

Parameters will be read by the microservice from the configuration file and passed to the “configure” method of the corresponding component. Here’s an example of the configuration:

```yml
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
default_name: "World"
```

More details on this mechanism can be found in [The Configuration recipe](../../recipes/configuration).

This is all the code of the controller in the file:

**/HelloWorldController.py**

```python
# -*- coding: utf-8 -*- 
class HelloWorldController:
    __default_name = None

    def __init__(self):
        self.__default_name = "Pip User"

    def configure(config):
        self.__default_name = config.get_as_string_with_default("default_name", self.__default_name)

    def greeting(name):
        return f"Hello, {name if name is not None else self.__default_name} !"

```

### Step 3. REST service
One of the most popular ways of transferring data between microservices is using the synchronous HTTP REST protocol. The HelloWorldRestService will be used to implement an external REST interface. This component extends the abstract RestService of the Pip.Services toolkit, which implements all the necessary functionality for processing REST HTTP requests.

```python
class HelloWorldRestService(RestService):
```

Next, we’ll need to register the REST operations that we’ll be using in the class’s register method. In this microservice, we’ll only be needing to implement a single GET command: “/greeting”. This command receives a “name” parameter, calls the controller’s “greeting” method, and returns the generated result to the client.

```python
def register(self):
    self.register_route(method="GET", route=self._route, handler=self.greeting)


def greeting(self, name):
    result = Parameters.from_tuples("name", self._controller.greeting(name))

    self.send_result(result)

```

To get a reference to the controller, we’ll add its descriptor to the _dependency_resolver with a name of “controller”.

```python
def __init__(self):
    super(HelloWorldRestService, self).__init__()
    self._base_route = "/hello_word"
    ControllerDescriptor = Descriptor('hello-world', 'controller', '*', '*', '1.0')
    self._dependency_resolver.put('controller', ControllerDescriptor)

```

Using this descriptor, the base class will be able to find a reference to the controller during component linking. Check out [The Locator Pattern](TODO: add link) for more on how this mechanism works.

We also need to set a base route in the service’s constructor using the _base_route property. As a result, the microservice’s full REST request will look something like:

```GET /hello_world/greeting?name=John```

Full listing for the REST service found in the file:

**/HelloWorldRestService.py**
```python
class HelloWorldRestService(RestService):

    def __init__(self):
        super(HelloWorldRestService, self).__init__()
        self._base_route = "/hello_word"
        ControllerDescriptor = Descriptor('hello-world', 'controller', '*', '*', '1.0')
        self._dependency_resolver.put('controller', ControllerDescriptor)

    def set_references(self, references):
        super(HelloWorldRestService, self).set_references(references)
        self._controller = self._dependency_resolver.get_one_required('controller')

    def register(self):
        self.register_route(method="GET", route=self._route, handler=self.greeting, schema=None)

    def greeting(self, name):
        result = Parameters.from_tuples("name", self._controller.greeting(name))
        self.send_result(result)
```


### Step 4. Сomponent factory
When a microservice is being populated by components based on the configuration being used, it requires a special factory to create components in accordance with their descriptors. The HelloWorldServiceFactory class is used for just that, as it extends the Factory class of the Pip.Services toolkit.

```python
class HelloWorldServiceFactory(Factory):
```

Next, in the factory’s constructor, we’ll be registering descriptors and their corresponding component types.

```python
def __init__(self):
    super(HelloWorldServiceFactory, self).__init__()
    ControllerDescriptor = Descriptor('hello-world', 'controller', 'default', '*', '1.0')
    HttpServiceDescriptor = Descriptor('hello-world', 'service', 'http', '*', '1.0')
    self.register_as_type(ControllerDescriptor, HelloWorldController)
    self.register_as_type(HttpServiceDescriptor, HelloWorldRestService)


```

For more info on how this works, be sure to check out [The Container recipe](../../recipes/container).

Full listing of the factory’s code found in the file:

```python
# -*- coding: utf-8 -*- 
from HelloWorldController import HelloWorldController
from HelloWorldRestService import HelloWorldRestService
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory


class HelloWorldServiceFactory(Factory):
    def __init__(self):

        super(HelloWorldServiceFactory, self).__init__()
        ControllerDescriptor = Descriptor('hello-world', 'controller', 'default', '*', '1.0')
        HttpServiceDescriptor = Descriptor('hello-world', 'service', 'http', '*', '1.0')
        self.register_as_type(ControllerDescriptor, HelloWorldController)
        self.register_as_type(HttpServiceDescriptor, HelloWorldRestService)

```

### Step 5. Container
Last but not least, our microservice needs a container component. This component creates all of the other components, links them with one another, and controls their life cycle. Although there exist many different ways of running a microservice in a container (regular classes, serverless functions, serlets, etc), we’ll be running our example microservice as a system process. To do this, we’ll make the HelloWorldProcess extend the ProcessContainer class of the Pip.Services toolkit.

Although containers can be populated by components manually, we’ll be using dynamic configuration to do this. By default, ProcessContainer reads the configuration from an external config.yml file. All we have left to do is register the factory for creating components from their descriptors.

Full listing of the container’s code found in the file:

**/HelloWorldProcess.py**

```python
# -*- coding: utf-8 -*- 
from HelloWorldServiceFactory import HelloWorldServiceFactory
from pip_services3_container.ProcessContainer import ProcessContainer
from pip_services3_rpc.build import DefaultRpcFactory


class HelloWorldProcess(ProcessContainer):
    def __init__(self):

        super(HelloWorldProcess, self).__init__('hello-world', 'HelloWorld microservice')
        self._config_path = './config.yaml'
        self._factories.add(HelloWorldServiceFactory())
        self._factories.add(DefaultRpcFactory())

```

The dynamic configuration is defined in the file:

**‍/config.yml**

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
‍
# Status service
- descriptor: "pip-services:status-service:http:default:1.0"

```

Looking at the configuration file, we can conclude that the following components will be created in the microservice:

- [ContextInfo](../../components/info/context_info) - standard Pip.Services component for determining the name and description of a microservice.
- [ConsoleLogger](../../components/log/console_logger) - standard Pip.Services component for writing logs to stdout,
- [LogCounters](../../components/count/log_counters) - standard Pip.Services component for logging performance counters.
- HelloWorldController - the controller of our microservice, implemented in step 2. Make note of the controller’s descriptor, as it will be used to link the controller class to the REST service.
- [HttpEndpoint](../../rpc/services/http_endpoint) - standard Pip.Services component that allows multiple services to use a single HTTP port simultaneously.
- HelloWorldRestServices - the REST service we implemented on step 3.
- [HeartbeatHttpService](../../rpc/services/heartbeat_http_service) - standard Pip.Services component that is used to check whether or not a microservice is still up and running by calling GET /heartbeat.
- [StatusHttpService](../../rpc/services/status_http_service) - standard Pip.Services component for getting the status of a microservice by calling GET /status.

As you may have noticed, more than half of the components are being taken from Pip.Services and used “right out of the box”. This significantly expands our microservice’s capabilities, with minimal effort on our part.

### Step 6. Run and test the microservice
In Python, we’ll need a special file to run the microservice. All this file does is creates a container instance and runs it with the parameters provided from the command line.

```python

# -*- coding: utf-8 -*- 
from HelloWorldProcess import HelloWorldProcess

if __name__ == '__main__':
    runner = HelloWorldProcess()
    print("run")
    try:
        runner.run()
    except Exception as ex:
        print(ex)

```

When a microservice starts up, the following sequence of events takes place:

1. A container is created and started;

2. The container reads the configuration found in config.yml;

2. Using the factory, the container creates the necessary components in accordance with their descriptors (see [The Container recipe](../../recipes/container));

4. The components are configured. During this step, all components that implement the IConfigurable interface have their configure methods called with the configuration defined in config.yml passed as a parameter (see [The Configuration recipe]((../../recipes/configuration)));

5. Components are linked. All components that implement the IReferenceable interface get their setReferences methods called with a list of components available in the container. With the help of descriptors, objects can find all necessary dependencies (see [The References recipe]);

6. Components with active processes are run. A component is considered to contain active processes if it implements the IOpenable interface and has an open method defined (see [The Component Lifecycle recipe](../../recipes/component_lifecycle)).

When the microservice receives a signal to stop the process, the reverse sequence takes place:

1. Components with active processes are closed - classes implementing the IClosable interface get their close methods called;
Components are unlinked. All components that implement the IUnreferenceable interface have their unsetReferences methods called;
2. The components previously created in the container are destroyed;
3. The container is stopped.

To start the microservice, run the following command from a terminal:

```bash
python ./run.py
```

If the microservice started up successfully, you should see the following result in the terminal:

```
[echo:INFO:2018-09-25T15:15:30.284Z] Press Control-C to stop the microservice...
[echo:DEBUG:2018-09-25T15:15:30.542Z] Opened REST service at http://0.0.0.0:8080
[echo:INFO:2018-09-25T15:15:30.542Z] Container hello-world started.
```

Test the microservice by requesting the following URL in a browser:

```http://localhost:8080/hello_world/greeting?name=John```

If all’s well, you should get the following string as a result:

```Hello, John!```

All source codes are available on [GitHub](https://github.com/pip-services-samples/service-quickstart-python).

To learn even more about Pip.Services, consider creating a [Data Microservice](../../rurptials/data_microservice) as your next step!