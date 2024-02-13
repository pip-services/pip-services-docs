
```cs
using PipServices3.Components.Build;

// Creating a factory
public class MyClassFactory: Factory
{
    public MyClassFactory(): base()
    {
        var ComponentADescriptor = new Descriptor("myservice", "mycomponentA", "default", "*", "1.0");
        var ComponentBDescriptor = new Descriptor("myservice", "mycomponent-b", "default", "*", "1.0");
        
        RegisterAsType(ComponentADescriptor, typeof(MyComponentA));
        RegisterAsType(ComponentBDescriptor, typeof(MyComponentB));
    }
}

```

