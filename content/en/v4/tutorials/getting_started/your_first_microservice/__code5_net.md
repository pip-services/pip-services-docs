
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
