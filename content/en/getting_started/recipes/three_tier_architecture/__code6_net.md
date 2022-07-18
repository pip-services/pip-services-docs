
```cs
using System;
using System.Runtime.Serialization;
using System.Threading.Tasks;

using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Data;
using PipServices3.Rpc.Services;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;


public class HelloFriendRestService: RestService
{
    protected HelloFriendController controller;

    public HelloFriendRestService() : base()
    {
        _baseRoute = "/hello_friend";
    }
    
    public override void Configure(ConfigParams config)
    {
        base.Configure(config);
    }

    public override void SetReferences(IReferences references)
    {
        base.SetReferences(references);
        controller = references.GetOneRequired<HelloFriendController>(new Descriptor("hello-friend", "controller", "*", "*", "1.0"));
    }

    private async Task Greeting(HttpRequest req, HttpResponse res, RouteData routeData)
    {
        var result = await controller.Greeting();
        await SendResultAsync(res, result);
    }

    private async Task CreateAsync(HttpRequest req, HttpResponse res, RouteData routeData)
    {
        var correlationId = this.GetCorrelationId(req);
        var friend = new MyFriend() { Id = req.Query["id"], Type = req.Query["type"], Name = req.Query["Name"] };
        var result = await controller.CreateAsync(correlationId, friend);
        await SendResultAsync(res, result);
    }

    public override void Register()
    {
        RegisterRoute(method: "GET", route: "/greeting", action: Greeting);
        RegisterRoute(method: "GET", route: "/greeting_create", action: CreateAsync);
    }
}

```
