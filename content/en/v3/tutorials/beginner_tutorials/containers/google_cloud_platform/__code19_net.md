
```cs
// Controller and service are added as dependencies
public class MyCloudFunction : CloudFunction
{
    private MyController _controller;
    private CloudFunctionService _service;

    public MyCloudFunction() : base("mygroup", "Mygroup service")
    {
        _configPath = "./config.yaml";
        _factories.Add(new MyFactory());
        _dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "*"));
        _dependencyResolver.Put("service", new Descriptor("mygroup", "service", "commandable-gcp-function", "function", "*"));
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        _controller = _dependencyResolver.GetOneRequired<MyController>("controller");
        _service = _dependencyResolver.GetOneRequired<CloudFunctionService>("service");
    }
}

```