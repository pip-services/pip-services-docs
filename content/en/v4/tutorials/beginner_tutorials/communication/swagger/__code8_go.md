
```go
type HelloFriendServiceFactory struct {
	*cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := &HelloFriendServiceFactory{
		Factory: cbuild.NewFactory(),
	}

	HttpControllerDescriptor := crefer.NewDescriptor("hello-friend", "controller", "http", "*", "1.0")                          // Controller 1
	CommandableHttpControllerDescriptor1 := crefer.NewDescriptor("hello-friend", "controller", "commandable-http1", "*", "1.0") // Controller 2
	CommandableHttpControllerDescriptor2 := crefer.NewDescriptor("hello-friend", "controller", "commandable-http2", "*", "1.0") // Controller 2
	ServiceDescriptor := crefer.NewDescriptor("hello-friend", "service", "default", "*", "1.0")                                 // service

	c.RegisterType(HttpControllerDescriptor, NewHelloFriendRestController)                    // Controller 1
	c.RegisterType(CommandableHttpControllerDescriptor1, NewFriendCommandableHttpController1) // Controller 2
	c.RegisterType(CommandableHttpControllerDescriptor2, NewFriendCommandableHttpController2) // Controller 3
	c.RegisterType(ServiceDescriptor, NewHelloFriendService)                                  // service

	return c
}
```
