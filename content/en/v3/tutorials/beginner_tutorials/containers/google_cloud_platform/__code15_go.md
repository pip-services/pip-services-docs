
```go
type MyCloudService struct {
	*gcpserv.CloudFunctionService
	controller *MyController
	headers    map[string]string
}

func NewMyCloudService() *MyCloudService {
	c := &MyCloudService{}
	c.CloudFunctionService = gcpserv.NewCloudFunctionService("")
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("mygroup", "controller", "default", "controller", "1.0"))
	return c
}

func (c *MyCloudService) SetReferences(ctx context.Context, references cref.IReferences) {
	c.CloudFunctionService.SetReferences(ctx, references)
	res, err := c.DependencyResolver.GetOneRequired("controller")
	if err != nil {
		panic("Controller is not found")
	}

	c.controller = res.(*MyController)
}

func (c *MyCloudService) Register() {
	c.RegisterAction(
		"greetings",
		cvalid.NewObjectSchema().WithRequiredProperty("body", cvalid.NewObjectSchema().WithRequiredProperty("name", cconv.String)).Schema,
		func(res http.ResponseWriter, req *http.Request) {
			params := gcputil.CloudFunctionRequestHelper.GetParameters(req)
	        name := params.GetAsStringWithDefault("name", "default name")

			result, err := c.controller.Greetings(req.Context(), name)

			for key, value := range c.headers {
				res.Header().Add(key, value)
			}

			rpcserv.HttpResponseSender.SendResult(res, req, result, err)
		},
	)
}

```