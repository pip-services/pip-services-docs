
```cs
// Controller is added as a dependency
public class MyCloudFunction: CloudFunction
{
    private MyController _controller;

    public MyCloudFunction(): base("mygroup", "MyGroup")
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