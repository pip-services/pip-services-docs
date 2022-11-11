
```cs
// Controller's descriptor is defined in the configuration file
public class MyCommandableCloudFunction: CommandableCloudFunction
{
    private MyController _controller;

    public MyCommandableCloudFunction(): base("mygroup", "MyGroup")
    {
        _configPath = "./config.yaml";
        _factories.Add(new MyFactory());
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        _controller = references.GetOneRequired<MyController>(new Descriptor("mygroup", "controller", "default", "controller", "*"));
    }
}


```