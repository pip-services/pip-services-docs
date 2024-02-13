
```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;

var factory1 = new Factory();
factory1.RegisterAsType(new Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"), typeof(MyComponent1));
compositeFactory.Add(factory1);

```
