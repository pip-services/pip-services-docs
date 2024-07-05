
```go
factory1 := cbuild.NewFactory()
factory1.RegisterType(cref.NewDescriptor("mygroup", "mycomponent1", "default", "*", "1.0"), NewMyComponent1)
compositeFactory.Add(factory1)
```
