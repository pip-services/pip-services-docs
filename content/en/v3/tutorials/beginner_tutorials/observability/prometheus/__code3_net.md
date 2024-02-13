
```cs
using PipServices3.Commons.Config;

var counters = new PrometheusCounters();
counters.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

await counters.OpenAsync(null);

var mycomponent = new MyComponentA(counters);
```
