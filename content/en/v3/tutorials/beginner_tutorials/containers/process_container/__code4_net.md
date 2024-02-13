
```cs
using PipServices3.Container;
using PipServices3.Commons.Refer;


public class MyProcess: ProcessContainer
{
    public MyProcess(): base("myservice", "My service running as a process")
    {
        _configPath = "./config.yaml";
        _factories.Add(new MyFactory());
    }
}

```
