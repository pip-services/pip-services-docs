
```typescript
class HelloWorldRestController extends rpc.RestController
```

Next, we'll need to register the REST operations that we'll be using in the class's register method. In this microservice, we'll only be needing to implement a single GET command: "/greeting". This command receives a "name" parameter, calls the service's "greeting" method, and returns the generated result to the client.

```typescript
public register() {
    this.registerRoute("get", "/greeting", null, async (req, res) => {
        let name = req.query.name;
        try {
            let result = await this._service.greeting(name);
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
    this._dependencyResolver.put("service", new commons.Descriptor("hello-world", "service", "*", "*", "1.0"));
}

```
