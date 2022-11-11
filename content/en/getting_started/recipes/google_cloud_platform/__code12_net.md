
```cs
// Controller's and service’s descriptors are defined in the configuration file
public class MyCloudFunction : CloudFunction
{
    private MyController _controller;
    private MyCloudService _service;

    public MyCloudFunction() : base("mygroup", "MyGroup")
    {
        _configPath = "./config.yaml";
        _factories.Add(new MyFactory());
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        _controller = references.GetOneRequired<MyController>(new Descriptor("mygroup", "controller", "default", "controller", "*"));
        _service = references.GetOneRequired<MyCloudService>(new Descriptor("mygroup", "service", "gcp-function", "function", "*"));
    }
}


```