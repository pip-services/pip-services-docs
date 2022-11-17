
```cs
// Controller is added as a dependency
public class MyCommandableCloudFunction: CommandableCloudFunction
{
    private MyController _controller;

    public MyCommandableCloudFunction(): base("mygroup", "MyGroup")
    {
        _configPath = "./config.yaml";
        _dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "*"));
        _factories.Add(new MyFactory());
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        _controller = _dependencyResolver.GetOneRequired<MyController>("controller");
    }
}

```