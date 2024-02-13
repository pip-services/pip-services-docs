
```go
// Controller is added as a dependency
type MyCloudFunction struct {
	*gcpcont.CloudFunction
	controller *MyController
}

func NewMyCloudFunction() *MyCloudFunction {
	c := &MyCloudFunction{}
	c.CloudFunction = gcpcont.InheritCloudFunction(c)
	c.SetConfigPath("./config.yaml")
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "*"))
	c.AddFactory(NewMyFactory())
	return c
}

func (c *MyCloudFunction) SetReferences(ctx context.Context, references cref.IReferences) {
	c.CloudFunction.SetReferences(ctx, references)
	c.Counters.SetReferences(ctx, references)

	res, err := c.DependencyResolver.GetOneRequired("conroller")
	if err != nil {
		panic("Controller is not found")
	}

	c.controller = res.(*MyController)
}

func (c *MyCloudFunction) action(res http.ResponseWriter, req *http.Request) {
	var body map[string]string

	_ = gcputil.CloudFunctionRequestHelper.DecodeBody(req, &body)
	defer req.Body.Close()

	name := body["name"]

	result, err := c.controller.Greetings(req.Context(), name)
	rpcserv.HttpResponseSender.SendResult(res, req, result, err)
}

func (c *MyCloudFunction) Register() {
	c.RegisterAction("greetings", nil, c.action)
}

```