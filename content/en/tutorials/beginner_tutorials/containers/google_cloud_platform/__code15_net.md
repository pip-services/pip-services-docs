
```cs
public class MyCloudService : CloudFunctionService
{
    private MyController _controller;
    private IDictionary<string, string> _headers = new Dictionary<string, string>() { { "Content-Type", "application/json" } };

    public MyCloudService() : base()
    {
        _dependencyResolver.Put("controller", new Descriptor("mygroup", "controller", "default", "controller", "1.0"));
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        _controller = _dependencyResolver.GetOneRequired<MyController>("controller");
    }

    protected override void Register()
    {
        RegisterAction(
        "greetings",
        new ObjectSchema()
            .WithRequiredProperty("body",
                new ObjectSchema()
                .WithRequiredProperty("name", TypeCode.String)
        ),
        async (HttpContext context) =>
        {
            var parameters = await CloudFunctionRequestHelper.GetParametersAsync(context);
            var name = parameters.GetAsStringWithDefault("name", "default name");

            var result = await _controller.GreetingsAsync(name);

            foreach (var key in _headers.Keys)
                context.Response.Headers.Add(key, _headers[key]);

            await HttpResponseSender.SendResultAsync(context.Response, result);
        }
    );
    }
}


```