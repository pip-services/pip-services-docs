
```cs
using System.Threading.Tasks;
using PipServices3.Commons.Config;
using PipServices3.Rpc.Clients;

namespace ExampleApp
{
    class Program
    {
        static void Main(string[] args)
        {

            var client = new MyCommandableHttpClient("commandable_hello_friend");
            client.Configure(ConfigParams.FromTuples(
                "connection.protocol", "http",
                "connection.host", "localhost",
                "connection.port", 8080
            ));

            client.OpenAsync(null).Wait();

            var data = client.Greeting("123");  // Returns 'Hello, Peter !'
        }
    }

    public class MyCommandableHttpClient : CommandableHttpClient
    {
        public MyCommandableHttpClient(string baseRoute) : base(baseRoute) { }

        public async Task<string> Greeting(string correlationId)
        {
            return await CallCommandAsync<string>("greeting", correlationId, new { name = "Peter" });
        }
    }
}
```

