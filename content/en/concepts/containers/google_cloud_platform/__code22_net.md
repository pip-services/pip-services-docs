
```cs
public class MyCommandableCloudService : CommandableCloudFunctionService
{
    public MyCommandableCloudService() : base("mygroup")
    {
        // The "controller" dependency is required by all Commandable services
        _dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "1.0"));
    }
}


```