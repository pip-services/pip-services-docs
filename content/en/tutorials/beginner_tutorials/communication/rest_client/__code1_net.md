
```cs
using PipServices3.Commons.Config;
using PipServices3.Rpc.Services;


    class MyRestService : RestService
    {
        public MyRestService(): base()
        {
            _baseRoute = "/my_service";
        }

        // GET
        private async Task MyPageGet(HttpRequest request, HttpResponse response, RouteData routeData)
        {
            var name = routeData.Values["name"].ToString();
            var message = request.Query.TryGetValue("message", out StringValues sortValues)
                ? sortValues.ToString()
                : string.Empty;

            var res = message + ", " + name;
            await this.SendResultAsync(response, res);
        }

        // HEAD
        private async Task MyPageHead(HttpRequest request, HttpResponse response, RouteData routeData)
        {
            await this.SendEmptyResultAsync(response);
        }

        // POST
        private async Task MyPagePost(HttpRequest request, HttpResponse response, RouteData routeData)
        {
            
            var name = routeData.Values["name"].ToString();
            var message = request.Query.TryGetValue("message", out StringValues sortValues)
                ? sortValues.ToString()
                : string.Empty;

            IDictionary<string, object> data = null;
            using (var streamReader = new StreamReader(request.Body))
            {
                data = JsonConverter.ToMap(streamReader.ReadToEnd());
            }

            var res = message + ", " + name + ", " + "data:" + data["data1"];

            await this.SendResultAsync(response, res);
        }

        // PUT
        private async Task MyPagePut(HttpRequest request, HttpResponse response, RouteData routeData)
        {

            var name = routeData.Values["name"].ToString();
            var message = request.Query.TryGetValue("message", out StringValues sortValues)
                ? sortValues.ToString()
                : string.Empty;

            IDictionary<string, object> data = null;
            using (var streamReader = new StreamReader(request.Body))
            {
                data = JsonConverter.ToMap(streamReader.ReadToEnd());
            }

            var res = message + ", " + name + ", " + "data:" + data["data1"];

            await this.SendResultAsync(response, res);
        }
    }


// Instantiation
var myRestService = new MyRestService();

// REST service configuration
myRestService.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 15235
));
            
// Connection
await myRestService.OpenAsync("123");

```
