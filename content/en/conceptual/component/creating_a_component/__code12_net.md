
```cs
using PipServices3.Container;

// Creating a process container
public class MyProcess: ProcessContainer
{
    public MyProcess(): base("myservice", "My service running as a process")
    {
        _configPath = "../../../../config/config.yml";
        _factories.Add(new MyClassFactory());
    }
}

```

