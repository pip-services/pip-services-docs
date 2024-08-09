
```go
type FriendCommandableHttpController1 struct {
	*cntrl.CommandableHttpController
	_swaggerPath string
}

func NewFriendCommandableHttpController1() *FriendCommandableHttpController1 {
	c := &FriendCommandableHttpController1{}
	c.CommandableHttpController = cntrl.InheritCommandableHttpController(c, "commandable_hello_friend1")
	c.DependencyResolver.Put(context.Background(), "service", crefer.NewDescriptor("hello-friend", "service", "*", "*", "*"))
	return c
}

func (c *FriendCommandableHttpController1) Configure(ctx context.Context, config *cconf.ConfigParams) {
	c.RestController.Configure(ctx, config)

	// swagger
	c._swaggerPath, _ = config.GetAsNullableString("swagger.path")
}

func (c *FriendCommandableHttpController1) Register() {
	c.CommandableHttpController.Register()

	// swagger
	if c._swaggerPath != "" {
		c.RegisterOpenApiSpecFromFile(c._swaggerPath)
	}
}
```
