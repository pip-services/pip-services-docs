
```go
type MyFactory struct {
	*cbuild.Factory
}

func NewMyFactory() *MyFactory {
	c := &MyFactory{}
	c.Factory = cbuild.NewFactory()
	c.RegisterType(cref.NewDescriptor("mygroup", "controller", "default", "controller", "1.0"), NewMyController)
	c.RegisterType(cref.NewDescriptor("mygroup", "service", "gcp-function", "function", "1.0"), NewMyCloudService)
	return c
}
```