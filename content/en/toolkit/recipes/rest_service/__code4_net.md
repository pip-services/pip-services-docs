
```cs
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

using PipServices3.Commons.Config;
using PipServices3.Rpc.Services;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var myRestService = new MyRestService();

            myRestService.Configure(ConfigParams.FromTuples(
                "connection.protocol", "http",
                "connection.host", "localhost",
                "connection.port", 15239
            ));

            myRestService.OpenAsync("123").Wait();

            Console.Read(); // wait for close
        }
    }

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
}

```
