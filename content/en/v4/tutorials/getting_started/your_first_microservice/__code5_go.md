
```go
type HelloWorldRestController struct {
	*rpc.RestController
	service *HelloWorldService
}
```

Next, we'll need to register the REST operations that we'll be using in the class's Register method. In this microservice, we'll only be needing to implement a single GET command: "/greeting". This command receives a "name" parameter, calls the service's "greeting" method, and returns the generated result to the client.

```go
func (c *HelloWorldRestController) greeting(res http.ResponseWriter, req *http.Request) {
	name := req.URL.Query().Get("name")
	result, err := c.service.Greeting(req.Context(), name)
	c.SendResult(res, req, result, err)
}

func (c *HelloWorldRestController) Register() {
	c.RegisterRoute("get", "/greeting", nil, c.greeting)
}
```

To get a reference to the service, add its handle to the DependencyResolver under the name "service". And for the registration mechanism to work correctly, you must pass a pointer to RestService on the component that implements the IRegistrable interface. Let's do it in the component constructing method:

```go
func NewHelloWorldRestController() *HelloWorldRestController {
	c := &HelloWorldRestController{}
	c.RestController = rpc.InheritRestController(c)
	c.BaseRoute = "/hello_world"
	c.DependencyResolver.Put(context.Background(), "service", cref.NewDescriptor("hello-world", "service", "*", "*", "1.0"))
	return c
}

```
