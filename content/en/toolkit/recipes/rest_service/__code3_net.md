
```cs
using PipServices3.Commons.Config;

var myRestService = new MyRestService();

myRestService.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 15239
));

myRestService.OpenAsync("123").Wait();


```
