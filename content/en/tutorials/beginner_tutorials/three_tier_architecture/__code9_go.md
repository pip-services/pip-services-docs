
```go
import (
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
)


var HttpServiceDescriptor = cref.NewDescriptor("hello-friend", "service", "http", "*", "1.0")      // View
var ControllerDescriptor = cref.NewDescriptor("hello-friend", "controller", "default", "*", "1.0") // Controller
var PersistenceDescriptor = cref.NewDescriptor("hello-friend", "persistence", "mysql", "*", "1.0") // Persistence

type HelloFriendServiceFactory struct {
	*cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := &HelloFriendServiceFactory{}
	c.Factory = cbuild.NewFactory()

	c.RegisterType(HttpServiceDescriptor, NewHelloFriendRestService) // View
	c.RegisterType(ControllerDescriptor, NewHelloFriendController)   // Controller
	c.RegisterType(PersistenceDescriptor, NewHelloFriendPersistence) // Persistence

	return c
}


```
