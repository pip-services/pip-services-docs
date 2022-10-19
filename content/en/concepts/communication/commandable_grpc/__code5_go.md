
```go
import (
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cbuild "github.com/pip-services3-gox/pip-services3-components-gox/build"
)


var FactoryDescriptor = cref.NewDescriptor("service-mydata", "factory", "default", "default", "1.0")
var ControllerDescriptor = cref.NewDescriptor("service-mydata", "controller", "default", "*", "1.0")
var CommandableGrpcServiceDescriptor = cref.NewDescriptor("service-mydata", "service", "commandable-grpc", "*", "1.0")

type DefaultMyDataFactory struct {
	*cbuild.Factory
}

func NewDefaultMyDataFactory() *DefaultMyDataFactory {
	c := DefaultMyDataFactory{
		Factory: cbuild.NewFactory(),
	}

	c.RegisterType(ControllerDescriptor, NewMyDataController)
	c.RegisterType(CommandableGrpcServiceDescriptor, NewMyDataCommandableGrpcService)

	return &c
}
```
