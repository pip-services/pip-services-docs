
```cs
    using PipServices3.Commons.Config;
    using System;

public class MyComponentA: IConfigurable
{
    private string _param1 = "ABC";
    private int _param2 = 123;
    private bool _open=false;
    private string _status;

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
}

```
