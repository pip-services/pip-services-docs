
```cs
using PipServices3.Components.Build;
using PipServices3.Components.Refer;
using PipServices3.Container;

    // Creating a process container

class MyProcess : ProcessContainer
{
    public MyProcess() : base("myservice", "My service running as a process")
    {
        this._configPath = "../../../../../config/config.yml";

        var MyFactory1 = new Factory();

        MyFactory1.RegisterAsType(new Descriptor("myservice", "mycomponentA", "default", "*", "1.0"), typeof(MyComponentA));
        MyFactory1.RegisterAsType(new Descriptor("myservice", "mycomponent-b", "default", "*", "1.0"), typeof(MyComponentB));

        this._factories.Add(MyFactory1);
    }
}

```
