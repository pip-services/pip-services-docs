
```go
import (
        cref "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	cbuild "github.com/pip-services4/pip-services4-go/pip-services4-components-go/build"
)

type HelloFriendServiceFactory struct {
	*cbuild.Factory
}

func NewHelloFriendServiceFactory() *HelloFriendServiceFactory {
	c := HelloFriendServiceFactory{}
	c.Factory = cbuild.NewFactory()

	commandableHttpControllerDescriptor := cref.NewDescriptor("hello-friend", "controller", "commandable-http", "*", "1.0") 
	serviceDescriptor := cref.NewDescriptor("hello-friend", "service", "default", "*", "1.0")  

	c.RegisterType(commandableHttpControllerDescriptor, NewFriendCommandableHttpController)
	c.RegisterType(serviceDescriptor, NewHelloFriendService)

	return &c
}
```
