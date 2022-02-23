
```cs
var client = new MyCommandableHttpClient("commandable_hello_friend");
client.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

await client.OpenAsync(null);

```
