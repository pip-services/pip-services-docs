
```ts
// Controller and service are added as dependencies
public class MyCloudFunction : CloudFunction
{
    private MyController _controller;
    private MyCloudService _service;

    public MyCloudFunction() : base("mygroup", "MyGroup")
    {
        _configPath = "./config.yaml";
        _dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "*"));
        _dependencyResolver.Put("service", new Descriptor("mygroup", "service", "gcp-function", "function", "*"));
        _factories.Add(new MyFactory());
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        _controller = _dependencyResolver.GetOneRequired<MyController>("controller");
        _service = _dependencyResolver.GetOneRequired<MyController>("service");
    }
}


```