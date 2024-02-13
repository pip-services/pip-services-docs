
```cs
public class MyRestService : RestService
{
    public MyRestService() : base()
    {
        _baseRoute = "/my_service";
    }

    private async Task MyPage(HttpRequest req, HttpResponse res, RouteData routeData)
    {

        var parameters = GetParameters(req);

        var name = parameters.GetAsNullableString("name");
        var message = parameters.GetAsNullableString("message");
        var result = message + ", " + name;

        await SendResultAsync(res, result);
    }

    public override void Register()
    {
        RegisterRoute("GET", "/my_page/{name}", this.MyPage);
    }
}

```
