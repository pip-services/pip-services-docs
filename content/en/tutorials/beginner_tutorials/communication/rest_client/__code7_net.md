
```cs
using System;
using System.IO;
using System.Net.Http;
using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;

using PipServices3.Commons.Convert;
using PipServices3.Commons.Config;
using PipServices3.Rpc.Services;
using PipServices3.Rpc.Clients;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Instantiation
            var myRestService = new MyRestService();

            // REST service configuration
            myRestService.Configure(ConfigParams.FromTuples(
                "connection.protocol", "http",
                "connection.host", "localhost",
                "connection.port", 15235
            ));
            
            // Connection
            myRestService.OpenAsync("123").Wait();


            // Instantiation
            var client = new MyRestClient();

            // REST client configuration
            client.Configure(ConfigParams.FromTuples(
                "connection.protocol", "http",
                "connection.host", "localhost",
                "connection.port", 15235
            ));

            // Connection
            client.OpenAsync("123").Wait();

            // Using the different HTTP methods
            // GET
            Console.WriteLine("GET: " + client.GetDataGet("123", "David").Result);
            // HEAD
            Console.WriteLine("HEAD: " + client.GetDataHead("123", "David").Result);
            // POST
            Console.WriteLine("POST: " + client.GetDataPost("123", "David").Result);
            // PUT
            Console.WriteLine("PUT: " + client.GetDataPut("123", "David").Result);

            // Close REST service and REST client
            client.CloseAsync("123").Wait();
            myRestService.CloseAsync("123").Wait();
        }
    }

    class MyRestClient: RestClient
    {
        public MyRestClient()
        {
            _baseRoute = "/my_service";
        }

        public async Task<string> GetDataGet(string correlationId, string name)
        {
            return await this.CallAsync<string>(correlationId, HttpMethod.Get, "/my_page/" + name + "?message=Hello");
        }

        public async Task<string> GetDataHead(string correlationId, string name)
        {
            return await this.CallAsync<string>(correlationId, HttpMethod.Head, "/my_page/" + name + "?message=Hello");
        }

        public async Task<string> GetDataPost(string correlationId, string name)
        {
            return await this.CallAsync<string>(correlationId, HttpMethod.Post, "/my_page/" + name + "?message=Hello", new { data1= "my data" });
        }

        public async Task<string> GetDataPut(string correlationId, string name)
        {
            return await this.CallAsync<string>(correlationId, HttpMethod.Put, "/my_page/" + name + "?message=Hello", new { data1 = "my data" });
        }
    }

    // REST service
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

        public override void Register()
        {
            this.RegisterRoute("get", "/my_page/{name}", MyPageGet);
            this.RegisterRoute("head", "/my_page/{name}", MyPageHead);
            this.RegisterRoute("post", "/my_page/{name}", MyPagePost);
            this.RegisterRoute("put", "/my_page/{name}", MyPagePut);
        }
    }
}
```
