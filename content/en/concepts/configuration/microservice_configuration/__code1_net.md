
```cs
using System;
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using System.Threading.Tasks;

class ComponentB : IReferenceable, IConfigurable, IOpenable, IUnreferenceable
{
    private string _param1 = "ABC2";
    private int _param2 = 456;
    private bool _opened = false;
    private string _status;
    /// <summary>
    /// Creates a new instance of the component.
    /// </summary>
    public ComponentB()
    {
        this._status = "Created";
        Console.WriteLine("ComponentB has been created.");
    }
    public void Configure(ConfigParams config)
    {
        _param1 = config.GetAsStringWithDefault("param1", _param1);
        _param2 = config.GetAsIntegerWithDefault("param2", _param2);
        Console.WriteLine("ComponentB has been configured.");
    }
    public Task CloseAsync(string correlationId)
    {
        throw new NotImplementedException();
    }
    public bool IsOpen()
    {
        throw new NotImplementedException();
    }
    public Task OpenAsync(string correlationId)
    {
        throw new NotImplementedException();
    }
    public void SetReferences(IReferences references)
    {
        throw new NotImplementedException();
    }
    /// <summary>
    /// Unsets (clears) previously set references to dependent components.
    /// </summary>
    public void UnsetReferences()
    {
        throw new NotImplementedException();
    }
}
class ComponentA1 : IReferenceable, IConfigurable, IOpenable, IUnreferenceable
{
    private string _param1 = "ABC";
    private int _param2 = 123;
    private ComponentB _another_component;
    private bool _opened = false;
    private string _status = null;
    private string dummy_variable;
    public ComponentA1()
    {
        this._status = "Created";
        Console.WriteLine("ComponentA1 has been created.");
    }
    public void SetReferences(IReferences references)
    {
        _another_component = references.GetOneRequired<ComponentB>(
            new Descriptor("myservice", "component-b", "*", "*", "1.0")
        );
        _status = "Configured";
        Console.WriteLine("ComponentA1's references have been defined.");
    }
    public void Configure(ConfigParams config)
    {
        _param1 = config.GetAsStringWithDefault("param1", "ABC");
        _param2 = config.GetAsIntegerWithDefault("param2", 123);
        _status = "Configured";
        Console.WriteLine("ComponentA1 has been configured.");
    }
    public bool IsOpen()
    {
        return this._opened;
    }
    public async Task OpenAsync(string correlationId)
    {
        _opened = true;
        _status = "Open";
        Console.WriteLine("ComponentA1 has been opened.");
    }
    public async Task CloseAsync(string correlationId)
    {
        _opened = false;
        _status = "Closed";
        Console.WriteLine("ComponentA1 has been closed.");
    }
    /// <summary>
    /// Unsets (clears) previously set references to dependent components.
    /// </summary>
    public void UnsetReferences()
    {
        _another_component = null;
        _status = "Un-referenced";
        Console.WriteLine("References cleared");
    }
}
class ComponentA2 : IReferenceable, IConfigurable, IOpenable, IUnreferenceable
{
    private string _param1 = "ABC";
    private int _param2 = 123;
    private ComponentB _another_component;
    private bool _opened = false;
    private string _status = null;
    private string dummy_variable;
    public ComponentA2()
    {
        _status = "Created";
        Console.WriteLine("ComponentA2 has been created.");
    }
    public void SetReferences(IReferences references)
    {
        _another_component = references.GetOneRequired<ComponentB>(
            new Descriptor("myservice", "component-b", "*", "*", "1.0")
        );
        _status = "Configured";
        Console.WriteLine("ComponentA2's references have been defined.");
    }
    public void Configure(ConfigParams config)
    {
        _param1 = config.GetAsStringWithDefault("param1", "ABC");
        _param2 = config.GetAsIntegerWithDefault("param2", 123);
        _status = "Configured";
        Console.WriteLine("ComponentA2 has been configured.");
    }
    public bool IsOpen()
    {
        return this._opened;
    }
    public async Task OpenAsync(string correlationId)
    {
        _opened = true;
        _status = "Open";
        Console.WriteLine("ComponentA2 has been opened.");
    }
    public async Task CloseAsync(string correlationId)
    {
        _opened = false;
        _status = "Closed";
        Console.WriteLine("ComponentA2 has been closed.");
    }
    public async Task MyTask(string correlationId)
    {
        Console.WriteLine("Doing my business task");
        dummy_variable = "dummy value";
    }
    /// <summary>
    /// Unsets (clears) previously set references to dependent components.
    /// </summary>
    /// <exception cref="NotImplementedException"></exception>
    public void UnsetReferences()
    {
        throw new NotImplementedException();
    }
}

```
