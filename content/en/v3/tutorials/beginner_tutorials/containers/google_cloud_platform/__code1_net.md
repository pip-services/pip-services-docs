
```cs
// Controller's descriptor is defined in the configuration file
public class MyCloudFunction: CloudFunction
{
    private MyController _controller;

    public MyCloudFunction(): base("mygroup", "MyGroup")
    {
        _configPath = "./config.yaml";
        _factories.Add(new MyFactory());
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        this._controller = references.GetOneRequired<MyController>(new Descriptor("mygroup", "controller", "default", "controller", "*"));
    }

    private async Task Action(HttpContext context)
    {
        var parameters = await CloudFunctionRequestHelper.GetParametersAsync(context);
        var name = parameters.GetAsStringWithDefault("name", "default name");
        var result = await _controller.Greetings(name);

        await HttpResponseSender.SendResultAsync(result);
    }

    protected override void Register()
    {
        RegisterAction("greetings", null, Action);
    }
}

```