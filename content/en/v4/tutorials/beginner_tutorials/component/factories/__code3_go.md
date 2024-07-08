
```go
factory := cbuild.NewFactory()
factory.RegisterType(cref.NewDescriptor("mygroup", "mycomponent1", "default", "*", "1.0"), NewMyComponent1)
component1, err = factory.Create(cref.NewDescriptor("mygroup", "mycomponent1", "default", "name1", "1.0"))
```
