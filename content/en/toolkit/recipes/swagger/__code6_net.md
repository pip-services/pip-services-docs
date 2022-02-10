
```cs
using PipServices3.Rpc.Services;

public class FriendCommandableHttpService2 : CommandableHttpService
{
    private string _swaggerPath;

    public FriendCommandableHttpService2() : base("commandable_hello_friend2")
    {
        _dependencyResolver.Put("controller", new Descriptor("hello-friend", "controller", "*", "*", "*"));
    }

    public override void Configure(ConfigParams config)
    {
        base.Configure(config);

        // Swagger
        _swaggerPath = config.GetAsNullableString("swagger.path");
    }

    public override void Register()
    {
        base.Register();

        if (_swaggerPath != null)
            RegisterOpenApiSpecFromFile(_swaggerPath);
    }
}

```
