
```cs
using System.Threading.Tasks;

using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Rpc.Services;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

public class HelloFriendRestService: RestService
{
    private HelloFriendController _controller;

    // swagger
    private string _swaggerContent;
    private string _swaggerPath;

    public HelloFriendRestService(): base()
    {
        _baseRoute = "/hello_friend";

        var controllerDescriptor = new Descriptor("hello-friend", "controller", "*", "*", "1.0");
        _dependencyResolver.Put("controller", controllerDescriptor);

    }

    public override void Configure(ConfigParams config)
    {
        base.Configure(config);

        // swagger
        _swaggerContent = config.GetAsNullableString("swagger.content");
        _swaggerPath = config.GetAsNullableString("swagger.path");
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        _controller = _dependencyResolver.GetOneRequired<HelloFriendController>("controller");
    }

    public override void Register()
    {
        RegisterRoute("GET", "/greeting", this.Greeting);

        // swagger
        if (_swaggerContent != null)
            RegisterOpenApiSpec(_swaggerContent);

        if (_swaggerPath != null)
            RegisterOpenApiSpecFromFile(_swaggerPath);
    }

    public async Task Greeting(HttpRequest req, HttpResponse res, RouteData routeData)
    {
        var name = req.Query["name"];
        var result = _controller.Greeting(name);

        await SendResultAsync(res, result);
    }
}

```
