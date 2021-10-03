
```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Build;


var MyFactory1 = new Factory();

MyFactory1.RegisterAsType(new Descriptor("myservice", "mycomponentA", "default", "*", "1.0"), typeof(MyComponentA));
MyFactory1.RegisterAsType(new Descriptor("myservice", "mycomponent-b", "default", "*", "1.0"), typeof(MyComponentB));

```
