
```go
var factory = new Factory();
factory.RegisterAsType(new Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"), typeof(MyComponent1));
var component1 = factory.Create(new Descriptor("mygroup", "mycomponent1", "default", "name1", "1.0"));
```
