
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
    
public class MyComponentA : IReferenceable, IConfigurable, IOpenable, IUnreferenceable
{
    private string _param1 = "ABC";
    private int _param2 = 123;
    private bool _open = false;
    private string _status;
    private MyComponentB _anotherComponent;
        
    public string DummyVariable;
    
    // ...

    // Unsets (clears) previously set references to dependent components.
    public void UnsetReferences()
    {
        _anotherComponent = null;
        _status = "Un-referenced";
        Console.WriteLine("References cleared");
    }
}

```

