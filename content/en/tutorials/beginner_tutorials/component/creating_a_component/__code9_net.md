
```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using System;
using System.Threading.Tasks;

public class MyComponentB: IReferenceable, IUnreferenceable, IConfigurable, IOpenable, IDisposable
{
    private string _param1 = "ABC2";
    private int _param2 = 456;
    private bool _open = false;
    private string _status;

    // Creates a new instance of the component.
    public MyComponentB()
    {
        _status = "Created";
        Console.WriteLine("MyComponentB has been created.");
    }

    public async Task CloseAsync(string correlationId)
    {
        // pass
    }

    public void Configure(ConfigParams config)
    {
        // pass
    }

    public void Dispose()
    {
        // pass
    }

    public bool IsOpen()
    {
        // pass
        return true;
    }

    public async Task OpenAsync(string correlationId)
    {
        // pass
    }

    public void SetReferences(IReferences references)
    {
        // pass
    }

    public void UnsetReferences()
    {
        // pass
    }
}


public class MyComponentA : IReferenceable, IConfigurable, IOpenable, IUnreferenceable, IDisposable
{
    private string _param1 = "ABC";
    private int _param2 = 123;
    private bool _open = false;
    private string _status;
    private MyComponentB _anotherComponent;
        
    public string DummyVariable;

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

    public async Task CloseAsync(string correlationId)
    {
        _open = false;
        _status = "Closed";
        Console.WriteLine("MyComponentA has been closed.");
    }

    public void MyTask(string correlationId)
    {
        Console.WriteLine("Doing my business task");
        DummyVariable = "dummy value";
    }

    public void SetReferences(IReferences references)
    {
        _anotherComponent = references.GetOneRequired<MyComponentB>(new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0"));

        _status = "Configured";
        Console.WriteLine("MyComponentA's references have been defined.");
    }

    // Unsets (clears) previously set references to dependent components.
    public void UnsetReferences()
    {
        _anotherComponent = null;
        _status = "Un-referenced";
        Console.WriteLine("References cleared");
    }

    public void Dispose()
    {
        Console.WriteLine("Component destroyed");
    }
}

```

