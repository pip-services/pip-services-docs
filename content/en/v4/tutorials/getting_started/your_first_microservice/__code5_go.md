
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
