
```go
import (
    cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
    cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
)

type HelloFriendServiceFactory struct {
	*cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := &HelloFriendServiceFactory{
		Factory: cbuild.NewFactory(),
	}

	HttpServiceDescriptor := crefer.NewDescriptor("hello-friend", "service", "http", "*", "1.0")                          // View 1
	CommandableHttpServiceDescriptor1 := crefer.NewDescriptor("hello-friend", "service", "commandable-http1", "*", "1.0") // View 2
	CommandableHttpServiceDescriptor2 := crefer.NewDescriptor("hello-friend", "service", "commandable-http2", "*", "1.0") // View 2
	ControllerDescriptor := crefer.NewDescriptor("hello-friend", "controller", "default", "*", "1.0")                     // Controller

	c.RegisterType(HttpServiceDescriptor, NewHelloFriendRestService)                    // View 1
	c.RegisterType(CommandableHttpServiceDescriptor1, NewFriendCommandableHttpService1) // View 2
	c.RegisterType(CommandableHttpServiceDescriptor2, NewFriendCommandableHttpService2) // View 3
	c.RegisterType(ControllerDescriptor, NewHelloFriendController)                      // Controller

	return c
}

    
```
