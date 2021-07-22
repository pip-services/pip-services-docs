---
type: docs
title: "Swagger module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-swagger-dotnet"
no_list: true
weight: 30
description: > 
    Swagger UI for Pip.Services in .NET.
    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    It provides a Swagger UI that can be added into microservices and is seamlessly integrated with existing REST and Commandable HTTP services.
---


### Packages

The module contains the following packages:

- [**Build**](build) - Swagger service factory
- [**Services**](services) - Swagger UI service

### Use

Install the NuGet package as
```bash
dotnet add package PipServices3.Swagger
```

Below there is an example on how to develop a RESTful service component:
   
In the `Register` method we load an Open API specification for the service.
In the same class, you can enable swagger by default by setting the `_swaggerEnable` property to true in the constructor.
   
```csharp
public class MyRestService: RestService 
{
    public MyRestService() 
    {
        _baseRoute = "myservice";
        _swaggerEnable = true;
    }

    private Task GreetingAsync(HttpRequest req, HttpResponse res, ClaimsPrincipal user, RouteData rd) 
    {
        var parameters = GetParameters(request);
        var name = parameters.GetAsNullableString("name");
        var response = "Hello, " + name + "!";
        await SendResultAsync(res, response);
    }
        
    public void Register()
    {
        RegisterRoute(
            "get", "/greeting", 
            new ObjectSchema(true)
                .WithRequiredProperty("name", TypeCode.String),
            GreetingAsync
        );
        
        RegisterOpenApiSpecFromFile("./src/Service/Services/myservice.yml");
    }
}
```

The Open API specification for the service shall be prepared either manually
or using [Swagger Editor](https://editor.swagger.io/). Below there is an example of a yaml file created for this purpose.


```yaml
openapi: '3.0.2'
info:
  title: 'MyService'
  description: 'MyService REST API'
  version: '1'
paths:
  /myservice/greeting:
    get:
      tags:
        - myservice
      operationId: 'greeting'
      parameters:
      - name: correlation_id
        in: query
        description: Correlation ID
        required: false
        schema:
          type: string
      - name: name
        in: query
        description: Name of a person
        required: true
        schema:
          type: string
      responses:
        200:
          description: 'Successful response'
          content:
            application/json:
              schema:
                type: 'string'
```

Include Swagger service into `config.yml` file and enable swagger for your REST or Commandable HTTP services.
You can add an HttpEndpoint to allows sharing the same port between REST services and the Swagger service.

```yaml
---
...
# Shared HTTP Endpoint
- descriptor: "pip-services:endpoint:http:default:1.0"
  connection:
    protocol: http
    host: localhost
    port: 8080

# Swagger Service
- descriptor: "pip-services:swagger-service:http:default:1.0"

# My RESTful Service
- descriptor: "myservice:service:rest:default:1.0"
  swagger:
    enable: true
```

Finally, to create the required components, add the necessary factories to your container.

```csharp
...
using PipServices3.Rpc.Build
using PipServices3.Swagger.Build

public class MyProcess: ProcessContainer {
  public MyProcess()
    : base("myservice", "MyService microservice") 
  {    
    _factories.Add(new DefaultRpcFactory());
    _factories.Add(new DefaultSwaggerFactory());
    _factories.Add(new MyServiceFactory());
    ...
  }
}
```

Now, launch the microservice and open the browser. Then, open the Open API specification by invoking the following URL 
[http://localhost:8080/greeting/swagger](http://localhost:8080/greeting/swagger)

Then, open the Swagger UI using the link [http://localhost:8080/swagger](http://localhost:8080/swagger).
The result shall look similar to the one showed in the picture below.

<img src="swagger-ui.png"/>
