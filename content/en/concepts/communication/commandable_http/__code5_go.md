
```go
import (
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
)


type HelloFriendServiceFactory struct {
	cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := HelloFriendServiceFactory{}
	c.Factory = *cbuild.NewFactory()

	commandableHttpServiceDescriptor := cref.NewDescriptor("hello-friend", "service", "commandable-http", "*", "1.0") // View
	controllerDescriptor := cref.NewDescriptor("hello-friend", "controller", "default", "*", "1.0")                   // Controller

	c.RegisterType(commandableHttpServiceDescriptor, NewFriendCommandableHttpService)
	c.RegisterType(controllerDescriptor, NewHelloFriendController)

	return &c
}

```
