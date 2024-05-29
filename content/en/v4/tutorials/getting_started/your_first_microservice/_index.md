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
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_dart.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code2_python.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  Not available  
{{< /tabsection >}}


### Step 2. Project setup
Create a folder for the project and within it, add a requirements.txt file with the name of your microservice and a list of dependencies for your necessary components. For editing, you can use any text editor or IDE of your choice.

{{< tabsection isMarkdown=true >}}


{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```bash
go mod init quickstart
```

Update the generated /go.mod file to add there dependencies to Pip.Services toolkit.

**/go.mod**

```
module quickstart

go 1.18

require (
	github.com/pip-services3-gox/pip-services3-commons-gox v1.0.6
	github.com/pip-services3-gox/pip-services3-components-gox v1.0.6
	github.com/pip-services3-gox/pip-services3-container-gox v1.0.6
	github.com/pip-services3-gox/pip-services3-rpc-gox v1.0.2
)

require (
	github.com/felixge/httpsnoop v1.0.1 // indirect
	github.com/google/uuid v1.3.0 // indirect
	github.com/gorilla/handlers v1.5.1 // indirect
	github.com/gorilla/mux v1.8.0 // indirect
	github.com/pip-services3-gox/pip-services3-expressions-gox v1.0.1 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
)

```

In the command line execute the following command to install the dependencies:

```bash
go get -u
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

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

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

The external dependencies are defined in the file below:

**/requirements.txt**

```txt
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

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}

### Step 3. Service
The service will be a simple class that implements a single business method, which receives a name and generates a greeting. In general, business methods can call other built-in controllers or work with a database.

{{< tabsection isMarkdown=true >}}

```typescript
public async greeting(name) {
    return "Hello, " + (name || this._defaultName) + "!";
  }
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```typescript
configure(config) {
   this._defaultName = config.getAsStringWithDefault("default_name", this._defaultName);
}
```

Parameters will be read by the microservice from the configuration file and passed to the "configure" method of the corresponding component. Here's an example of the configuration:

```yml
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the service in the file:

**/HelloWorldController.js**

```typescript
"use strict";

class HelloWorldController {
  constructor() {
    this._defaultName = "Pip User";
  }

  public configure(config) {
    this._defaultName = config.getAsStringWithDefault("default_name", this._defaultName);
  }

  public async greeting(name) {
    return "Hello, " + (name || this._defaultName) + "!";
  }
}

exports.HelloWorldController = HelloWorldController

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

 Since their execution time might take too long, business methods are implemented in .NET as asynchronous functions:

```cs
public async Task<string> GreetingAsync(string name){    
  return await Task.FromResult($"Hello {name ?? _defaultName}!");
}
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "_default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```cs
public void Configure(ConfigParams config){
    _defaultName = config.GetAsStringWithDefault("default_name", null);
}
```

Now, the parameters that are read by the microservice from the configuration file will be passed to the "Configure" method of the corresponding component. Here's an example of a configuration:

```yml
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the service in the file:

**/HelloWorldController.cs**

```cs
using System.Threading.Tasks;using PipServices3.Commons.Config; 
namespace HelloWorld {    
    public class HelloWorldController : IConfigurable {        
        private string _defaultName = null; 

        public void Configure(ConfigParams config) {            
            _defaultName = config.GetAsStringWithDefault("default_name", null);        
        }   

        public async Task<string> GreetingAsync(string name) {            
            return await Task.FromResult($"Hello {name ?? _defaultName}!");        
        }    
    }
}

```
{{< /tabsection >}}


{{< tabsection isMarkdown=true >}}

```go
func (c *HelloWorldController) Greeting(ctx context.Context, name string) (result string, err error) {
	if name == "" {
		name = c.defaultName
	}
	return "Hello, " + name + "!", nil
}
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```go
func (c *HelloWorldController) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}
```

Parameters will be read by the microservice from the configuration file and passed to the "configure" method of the corresponding component. Here's an example of the configuration:

```yml
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the controller in the file:

**/HelloWorldController.go**

```go
package quickstart

import (
	"context"

	cconf "github.com/pip-services3-gox/pip-services3-commons-gox/config"
)

type HelloWorldController struct {
	defaultName string
}

func NewHelloWorldController() *HelloWorldController {
	c := HelloWorldController{}
	c.defaultName = "Pip User"
	return &c
}

func (c *HelloWorldController) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.defaultName = config.GetAsStringWithDefault("default_name", c.defaultName)
}

func (c *HelloWorldController) Greeting(ctx context.Context, name string) (result string, err error) {
	if name == "" {
		name = c.defaultName
	}
	return "Hello, " + name + "!", nil
}

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```dart
Future<String> greeting(name) async{
    return 'Hello, ' + (name ?? defaultName) + '!';
}
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```dart
void configure(config) {
    defaultName = config.getAsStringWithDefault('default_name', defaultName);  
}
```

Parameters will be read by the microservice from the configuration file and passed to the "configure" method of the corresponding component. Here's an example of the configuration:

```yml
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

This is all the code of the service in the file:

**/lib/src/HelloWorldController.dart**

```dart
import 'dart:async';

class HelloWorldController implements IConfigurable {
  var defaultName;
  HelloWorldController() {
    defaultName = 'Pip User';
  }

  @override  
  void configure(ConfigParams config) {
    defaultName = config.getAsStringWithDefault('default_name', defaultName);
  }
‍
  Future<String> greeting(name) async{
    return 'Hello, ' + (name ?? defaultName) + '!';
  }
}

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}


```python
def greeting(name):        
    return f"Hello, {name if name is not None else self.__defaultName} !"
```

To demonstrate the dynamic configuration of a component, the recipient name will be specified by the parameter "__default_name". To get the configuration, the component must implement the interface "IConfigurable" with the method "configure".

```python
def configure(config):        
    self.__default_name = config.get_as_string_with_default("default_name", self.__default_name)
```

Parameters will be read by the microservice from the configuration file and passed to the "configure" method of the corresponding component. Here's an example of the configuration:

```yml
# Controller
- descriptor: "hello-world:controller:default:default:1.0"
  default_name: "World"
```

More details on this mechanism can be found in [Component Configuration](../../tutorials/beginner_tutorials/configuration/component_configuration/).

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
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}

### Step 4. REST controller
One of the most popular ways of transferring data between microservices is using the synchronous HTTP REST protocol. The HelloWorldRestController will be used to implement an external REST interface. This component extends the abstract RestController of the Pip.Services toolkit, which implements all the necessary functionality for processing REST HTTP requests.

{{< tabsection isMarkdown=true >}}

```typescript
class HelloWorldRestService extends rpc.RestService
```

Next, we'll need to register the REST operations that we'll be using in the class's register method. In this microservice, we'll only be needing to implement a single GET command: "/greeting". This command receives a "name" parameter, calls the service's "greeting" method, and returns the generated result to the client.

```typescript
public register() {
    this.registerRoute("get", "/greeting", null, async (req, res) => {
        let name = req.query.name;
        try {
            let result = await this._controller.greeting(name);
            this.sendResult(req, res, result);
        } catch (ex) {
            this.sendError(req, res, ex);
        }
    });
}
```

To get a reference to the service, we'll add its descriptor to the dependency resolver with a name of "service".

```typescript
constructor() {
    super();
    this._baseRoute = "/hello_world";
    this._dependencyResolver.put("controller", new commons.Descriptor("hello-world", "controller", "*", "*", "1.0"));
}

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```cs
public class HelloWorldRestService : RestService
```

Next, we'll need to register the REST operations that we'll be using in the class's register method. In this microservice, we'll only be needing to implement a single GET command: "/greeting". This command receives a "name" parameter, calls the service's "greeting" method, and returns the generated result to the client.

```cs
public override void Register(){    
    base.Register();    
    RegisterRoute("GET", "/greeting", async (request, response, routeData) => {        
        string name = null;        
        if (request.Query.TryGetValue("name", out StringValues values)) {            
            name = values.FirstOrDefault();        
        }        
        await SendResultAsync(response, await _controller.GreetingAsync(name));    
  });
}
```

To get a reference to the service, we'll add its descriptor to the "_dependencyResolver" with a name of "service".

```cs
public HelloWorldRestService(){    
    _baseRoute = "hello_world";    
    _dependencyResolver.Put("controller", new Descriptor("hello-world", "controller", "default", "*", "1.0"));
}

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```go
type HelloWorldRestService struct {
	*rpc.RestService
	controller *HelloWorldController
}
```

Next, we'll need to register the REST operations that we'll be using in the class's Register method. In this microservice, we'll only be needing to implement a single GET command: "/greeting". This command receives a "name" parameter, calls the service's "greeting" method, and returns the generated result to the client.

```go
func (c *HelloWorldRestService) greeting(res http.ResponseWriter, req *http.Request) {
	name := req.URL.Query().Get("name")
	result, err := c.controller.Greeting(req.Context(), name)
	c.SendResult(res, req, result, err)
}

func (c *HelloWorldRestService) Register() {
	c.RegisterRoute("get", "/greeting", nil, c.greeting)
}
```

To get a reference to the service, add its handle to the DependencyResolver under the name "service". And for the registration mechanism to work correctly, you must pass a pointer to RestService on the component that implements the IRegistrable interface. Let's do it in the component constructing method:

```go
func NewHelloWorldRestService() *HelloWorldRestService {
	c := &HelloWorldRestService{}
	c.RestService = rpc.InheritRestService(c)
	c.BaseRoute = "/hello_world"
	c.DependencyResolver.Put(context.Background(), "controller", crefer.NewDescriptor("hello-world", "controller", "*", "*", "1.0"))
	return c
}

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```dart
class HelloWorldRestService extends rpc.RestService
```

Next, we'll need to register the REST operations that we'll be using in the class's register method. In this microservice, we'll only be needing to implement a single GET command: "/greeting". This command receives a "name" parameter, calls the service's "greeting" method, and returns the generated result to the client.

```dart
  @override
  void register() {
    registerRoute('get', '/greeting', null, (Request req) async {
      var name = req.url.queryParameters['name'];
      return sendResult(req, await controller!.greeting(name));
    });
  }
```

To get a reference to the service, we'll add its descriptor to the _dependency_resolver with a name of "service".

```dart
  HelloWorldRestService() : super() {
    baseRoute = '/hello_world';
    dependencyResolver.put(
        'controller', Descriptor('hello-world', 'controller', '*', '*', '1.0'));
  }

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```python
class HelloWorldRestService(RestService):
```

Next, we'll need to register the REST operations that we'll be using in the class's register method. In this microservice, we'll only be needing to implement a single GET command: "/greeting". This command receives a "name" parameter, calls the service's "greeting" method, and returns the generated result to the client.

```python
def register(self):
    self.register_route(method="GET", route=self._route, handler=self.greeting)


def greeting(self, name):
    result = Parameters.from_tuples("name", self._controller.greeting(name))

    self.send_result(result)

```

To get a reference to the service, we'll add its descriptor to the _dependency_resolver with a name of "service".

```python
def __init__(self):
    super(HelloWorldRestService, self).__init__()
    self._base_route = "/hello_world"
    ControllerDescriptor = Descriptor('hello-world', 'controller', '*', '*', '1.0')
    self._dependency_resolver.put('controller', ControllerDescriptor)

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}

Using this descriptor, the base class will be able to find a reference to the service during component linking. Check out [The Locator Pattern](https://www.geeksforgeeks.org/service-locator-pattern/) for more on how this mechanism works.

We also need to set a base route in the controller's constructor using the _base_route property. As a result, the microservice's full REST request will look something like:

```GET /hello_world/greeting?name=John```

Full listing for the REST controller can be found in the following file:

{{< tabsection isMarkdown=true >}}

**/HelloWorldRestService.js**
```typescript
"use strict";

const rpc = require("pip-services3-rpc-nodex");
const commons = require("pip-services3-commons-nodex");

class HelloWorldRestService extends rpc.RestService {
    constructor() {
        super();
        this._baseRoute = "/hello_world";
        this._dependencyResolver.put("controller", new commons.Descriptor("hello-world", "controller", "*", "*", "1.0"));
    }

    public setReferences(references) {
        super.setReferences(references);
        this._controller = this._dependencyResolver.getOneRequired('controller');
    }

    public register() {
        this.registerRoute("get", "/greeting", null, async (req, res) => {
            let name = req.query.name;
            try {
                let result = await this._controller.greeting(name);
                this.sendResult(req, res, result);
            } catch (ex) {
                this.sendError(req, res, ex);
            }
        });
    }
}

exports.HelloWorldRestService = HelloWorldRestService
```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**/HelloWorldRestService.cs**
```cs
using Microsoft.Extensions.Primitives;
using PipServices3.Commons.Refer;
using PipServices3.Rpc.Services;
using System.Linq; 
namespace HelloWorld {    
    public class HelloWorldRestService : RestService {        
        private HelloWorldController _controller;   

        public HelloWorldRestService() {            
            _baseRoute = "hello_world";            
            _dependencyResolver.Put("controller", new Descriptor("hello-world", "controller", "default", "*", "1.0"));        
        }    

        public override void SetReferences(IReferences references) {            
            base.SetReferences(references);            
            _controller = _dependencyResolver.GetOneRequired<HelloWorldController>("controller");        
        }  

        public override void Register() {            
            base.Register();            
            RegisterRoute("GET", "/greeting", async (request, response, routeData) => {                
                string name = null;                
                if (request.Query.TryGetValue("name", out StringValues values)) {                    
                  name = values.FirstOrDefault();                
                }                
              await SendResultAsync(response, await _controller.GreetingAsync(name));
            });        
        }    
    }
}
```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**/HelloWorldRestService.go**
```go
package quickstart

import (
	"context"
	"net/http"

	crefer "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	rpc "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

type HelloWorldRestService struct {
	*rpc.RestService
	controller *HelloWorldController
}

func NewHelloWorldRestService() *HelloWorldRestService {
	c := &HelloWorldRestService{}
	c.RestService = rpc.InheritRestService(c)
	c.BaseRoute = "/hello_world"
	c.DependencyResolver.Put(context.Background(), "controller", crefer.NewDescriptor("hello-world", "controller", "*", "*", "1.0"))
	return c
}

func (c *HelloWorldRestService) SetReferences(ctx context.Context, references crefer.IReferences) {
	c.RestService.SetReferences(ctx, references)
	depRes, depErr := c.DependencyResolver.GetOneRequired("controller")
	if depErr == nil && depRes != nil {
		c.controller = depRes.(*HelloWorldController)
	}
}

func (c *HelloWorldRestService) greeting(res http.ResponseWriter, req *http.Request) {
	name := req.URL.Query().Get("name")
	result, err := c.controller.Greeting(req.Context(), name)
	c.SendResult(res, req, result, err)
}

func (c *HelloWorldRestService) Register() {
	c.RegisterRoute("get", "/greeting", nil, c.greeting)
}

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**/lib/src/HelloWorldRestService.dart**
```dart
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:shelf/shelf.dart';
import './HelloWorldController.dart';

class HelloWorldRestService extends RestService {
  HelloWorldController? controller;

  HelloWorldRestService() : super() {
    baseRoute = '/hello_world';
    dependencyResolver.put(
        'controller', Descriptor('hello-world', 'controller', '*', '*', '1.0'));
  }

  @override
  void setReferences(references) {
    super.setReferences(references);
    controller =
        dependencyResolver.getOneRequired<HelloWorldController>('controller');
  }

  @override
  void register() {
    registerRoute('get', '/greeting', null, (Request req) async {
      var name = req.url.queryParameters['name'];
      return sendResult(req, await controller!.greeting(name));
    });
  }
}

```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

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
        result = self._controller.greeting(name)
        self.send_result(result)
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}

### Step 5. Component factory
When a microservice is being populated by components based on the configuration being used, it requires a special factory to create components in accordance with their descriptors. The HelloWorldControllerFactory class is used for just that, as it extends the Factory class of the Pip.Services toolkit.

{{< tabsection isMarkdown=true >}}

```typescript
class HelloWorldServiceFactory extends components.Factory
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```typescript
constructor() {
    super();
    this.registerAsType(
        new commons.Descriptor('hello-world', 'controller', 'default', '*', '1.0'),
        controller.HelloWorldController
    );
    this.registerAsType(
        new commons.Descriptor('hello-world', 'service', 'http', '*', '1.0'),
        restService.HelloWorldRestService
    );
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_turorials/containers/process_container).

Full listing of the factory's code found in the file:

**‍/HelloWorldServiceFactory.js**

```typescript
"use strict";

const components = require("pip-services3-components-nodex");
const commons = require("pip-services3-commons-nodex");
const controller = require("./HelloWorldController");
const restService = require("./HelloWorldRestService");

class HelloWorldServiceFactory extends components.Factory {
    constructor() {
        super();
        this.registerAsType(
            new commons.Descriptor('hello-world', 'controller', 'default', '*', '1.0'),
            controller.HelloWorldController
        );
        this.registerAsType(
            new commons.Descriptor('hello-world', 'service', 'http', '*', '1.0'),
            restService.HelloWorldRestService
        );
    }
}

exports.HelloWorldServiceFactory = HelloWorldServiceFactory
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```cs
public class HelloWorldServiceFactory : Factory
```

The factory's constructor is used to register descriptors and their corresponding component types.

```cs
public HelloWorldServiceFactory(){    
    RegisterAsType(ControllerDescriptor, typeof(HelloWorldController));    
    RegisterAsType(HttpServiceDescriptor, typeof(HelloWorldRestService));
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

Full listing of the factory's code found in the file:

**‍/HelloWorldServiceFactory.cs**

```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build; 

namespace HelloWorld {    

    public class HelloWorldServiceFactory : Factory {  

        public static Descriptor Descriptor = new Descriptor("hello-world", "factory", "service", "default", "1.0");        
        public static Descriptor ControllerDescriptor = new Descriptor("hello-world", "controller", "default", "*", "1.0");        
        public static Descriptor RestServiceDescriptor = new Descriptor("hello-world", "service", "http", "*", "1.0");         
        
        public HelloWorldServiceFactory(){            
            RegisterAsType(ControllerDescriptor, typeof(HelloWorldController));            
            RegisterAsType(RestServiceDescriptor, typeof(HelloWorldRestService));        
        }    
    }
}
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```go
type HelloWorldServiceFactory struct {
	*cbuild.Factory
}
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```go
func NewHelloWorldServiceFactory() *HelloWorldServiceFactory {
	c := HelloWorldServiceFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(
		cref.NewDescriptor("hello-world", "controller", "default", "*", "1.0"),
		NewHelloWorldController,
	)
	c.RegisterType(
		cref.NewDescriptor("hello-world", "service", "http", "*", "1.0"),
		NewHelloWorldRestService,
	)
	return &c
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

Full listing of the factory's code found in the file:

**‍/HelloWorldServiceFactory.go**

```go
package quickstart

import (
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
)

type HelloWorldServiceFactory struct {
	*cbuild.Factory
}

func NewHelloWorldServiceFactory() *HelloWorldServiceFactory {
	c := HelloWorldServiceFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(
		cref.NewDescriptor("hello-world", "controller", "default", "*", "1.0"),
		NewHelloWorldController,
	)
	c.RegisterType(
		cref.NewDescriptor("hello-world", "service", "http", "*", "1.0"),
		NewHelloWorldRestService,
	)
	return &c
}

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```dart
class HelloWorldServiceFactory extends Factory
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```dart
HelloWorldServiceFactory() : super() {
    registerAsType(
        Descriptor('hello-world', 'controller', 'default', '*', '1.0'),
        HelloWorldController);
    registerAsType(Descriptor('hello-world', 'service', 'http', '*', '1.0'),
        HelloWorldRestService);
}
```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

The full listing of the factory's code can found in the file:

**‍/lib/src/HelloWorldServiceFactory.dart**

```dart
import 'package:pip_services3_components/pip_services3_components.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import './HelloWorldController.dart';import './HelloWorldRestService.dart';

class HelloWorldServiceFactory extends Factory {
  HelloWorldServiceFactory() : super() {
    registerAsType(
        Descriptor('hello-world', 'controller', 'default', '*', '1.0'),
        HelloWorldController);
    registerAsType(Descriptor('hello-world', 'service', 'http', '*', '1.0'),
        HelloWorldRestService);
  }
}
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```python
class HelloWorldServiceFactory(Factory):
```

Next, in the factory's constructor, we'll be registering descriptors and their corresponding component types.

```python
def __init__(self):
    super(HelloWorldServiceFactory, self).__init__()
    ControllerDescriptor = Descriptor('hello-world', 'controller', 'default', '*', '1.0')
    HttpServiceDescriptor = Descriptor('hello-world', 'service', 'http', '*', '1.0')
    self.register_as_type(ControllerDescriptor, HelloWorldController)
    self.register_as_type(HttpServiceDescriptor, HelloWorldRestService)

```

For more info on how this works, be sure to check out [Process Container](../../tutorials/beginner_tutorials/containers/process_container).

A full listing of the factory's code can be found in the file:

**‍/HelloWorldServiceFactory.py**

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

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}

### Step 6. Container
Last but not least, our microservice needs a container component. This component creates all of the other components, links them with one another, and controls their life cycle. Although there exist many different ways of running a microservice in a container (regular classes, serverless functions, serlets, etc), we'll be running our example microservice as a system process. To do this, we'll make the HelloWorldProcess extend the ProcessContainer class of the Pip.Services toolkit.

Although containers can be populated by components manually, we'll be using dynamic configuration to do this. By default, ProcessContainer reads the configuration from an external config.yaml file. All we have left to do is register the factory for creating components from their descriptors.

The full listing of the container's code can be found in the file:

{{< tabsection isMarkdown=true >}}

**‍/HelloWorldProcess.js**

```typescript
"use strict";

const rpc = require("pip-services3-rpc-nodex");
const container = require('pip-services3-container-nodex');
const factory = require("./HelloWorldServiceFactory");

class HelloWorldProcess extends container.ProcessContainer {
    constructor() {
        super('hello-world', 'HelloWorld microservice');
        this._configPath = './config.yaml';
        this._factories.add(new factory.HelloWorldServiceFactory());
        this._factories.add(new rpc.DefaultRpcFactory());
    }
}

exports.HelloWorldProcess = HelloWorldProcess;
```

{{< /tabsection >}}


{{< tabsection isMarkdown=true >}}

**‍/HelloWorldProcess.cs**

```cs
using PipServices3.Container;
using PipServices3.Rpc.Build; 

namespace HelloWorld {

    public class HelloWorldProcess : ProcessContainer {    

        public HelloWorldProcess(): base("hello_world", "Hello world microservice") {            
            _configPath = "config.yaml";             
            _factories.Add(new DefaultRpcFactory());            
            _factories.Add(new HelloWorldServiceFactory());        
        }   

    }
}
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**‍/HelloWorldProcess.go**

```go
package quickstart

import (
	cproc "github.com/pip-services3-gox/pip-services3-container-gox/container"
	rpcbuild "github.com/pip-services3-gox/pip-services3-rpc-gox/build"
)

type HelloWorldProcess struct {
	*cproc.ProcessContainer
}

func NewHelloWorldProcess() *HelloWorldProcess {
	c := HelloWorldProcess{}
	c.ProcessContainer = cproc.NewProcessContainer("hello-world", "HelloWorld microservice")
	c.SetConfigPath("./config.yaml")
	c.AddFactory(NewHelloWorldServiceFactory())
	c.AddFactory(rpcbuild.NewDefaultRpcFactory())
	return &c
}

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**‍‍/lib/src/HelloWorldProcess.dart**

```dart
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_container/pip_services3_container.dart';
import './HelloWorldServiceFactory.dart';

class HelloWorldProcess extends ProcessContainer {
  HelloWorldProcess() : super('hello-world', 'HelloWorld microservice') {
    configPath = './config.yaml';
    factories.add(HelloWorldServiceFactory());
    factories.add(DefaultRpcFactory());
  }
}
```

{{< /tabsection >}}


{{< tabsection isMarkdown=true >}}

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

{{< /tabsection >}}


{{< tabsection isMarkdown=true >}}

**TODO: add language**

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
  {{< include "./__code1_node.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_net.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_go.md" >}}
{{< /tabsection >}}

{{< tabsection >}}
  {{< include "./__code1_dart.md" >}}
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

{{< tabsection isMarkdown=true >}}

**/run.js**

```typescript
"use strict";

const proc = require("./HelloWorldProcess");

try {
   new proc.HelloWorldProcess().run(process.argv);
} catch (ex) {
   console.error(ex);
}

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**/Program.cs**

```cs
namespace HelloWorld { 

    class Program { 

        static void Main(string[] args) {   

            var process = new HelloWorldProcess();            
            process.RunAsync(args).Wait();        
        }

    }
}
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**/bin/main.go**

```go
package main

import (
	"context"
	"os"
	"quickstart"
)

func main() {
	proc := quickstart.NewHelloWorldProcess()
	proc.Run(context.Background(), os.Args)
}
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**/bin/main.dart.**

```dart
import 'package:pip_quickstart/pip_quickstart.dart';

void main(List<String> argv) {
  try {
    var proc = HelloWorldProcess();
    proc.run(argv);
  } catch (ex) {
    print(ex);
  }
}

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**/main.py**

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

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

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

{{< tabsection isMarkdown=true >}}

```bash
node ./run.js
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```bash
dotnet run
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```bash
go run ./bin/run.go
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```bash
dart./bin/run.dart
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```bash
python ./run.py
```
{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}

If the microservice started up successfully, you should see the following result in the terminal:

```
[echo:INFO:2018-09-25T15:15:30.284Z] Press Control-C to stop the microservice...
[echo:DEBUG:2018-09-25T15:15:30.542Z] Opened REST service at http://0.0.0.0:8080
[echo:INFO:2018-09-25T15:15:30.542Z] Container hello-world started.
```

Test the microservice by requesting the following URL in a browser:

```http://localhost:8080/hello_world/greeting?name=John```

If all's well, you should get the following string as a result:

```Hello, John!```

All source codes are available on [GitHub](https://github.com/pip-services-samples).

To learn even more about Pip.Services, consider creating a [Data Microservice](../../getting_started/tutorials/data_microservice/) as your next step!
