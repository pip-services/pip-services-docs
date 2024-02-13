
```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using System;
using System.Threading.Tasks;


public class MyComponentB
{
    // ...
}


public class MyComponentA : IReferenceable, IConfigurable, IOpenable
{
    private string _param1 = "ABC";
    private int _param2 = 123;
    private bool _open = false;
    private string _status;
    private MyComponentB _anotherComponent;

    // Creates a new instance of the component.
    public MyComponentA()
    {
        _status = "Created";
        Console.WriteLine("MyComponentA has been created.");
    }

    public void Configure(ConfigParams config)
    {
        _param1 = config.GetAsStringWithDefault("param1", "ABC");
        _param2 = config.GetAsIntegerWithDefault("param2", 123);
        _status = "Configured";

        Console.WriteLine("MyComponentA has been configured.");
    }

    public bool IsOpen()
    {
        return _open;
    }

    public async Task OpenAsync(string correlationId)
    {
        _open = true;
        _status = "Open";
        Console.WriteLine("MyComponentA has been opened.");
    }

    public void SetReferences(IReferences references)
    {
        _anotherComponent = references.GetOneRequired<MyComponentB>(new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0"));

        _status = "Configured";
        Console.WriteLine("MyComponentA's references have been defined.");
    }
}

```

