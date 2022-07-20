
```cs
using PipServices3.Commons.Config;
using PipServices3.Rpc.Clients;

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
        
// Instantiation
var client = new MyRestClient();

// REST client configuration
client.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 15235
));

// Connection
await client.OpenAsync("123"); 
```
