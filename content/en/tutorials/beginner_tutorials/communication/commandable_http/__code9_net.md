
```cs
public class MyCommandableHttpClient : CommandableHttpClient
{
    public MyCommandableHttpClient(string baseRoute) : base(baseRoute) { }

    public async Task<string> Greeting(string correlationId)
    {
        return await CallCommandAsync<string>("greeting", correlationId, new { name = "Peter" });
    }
}

```
