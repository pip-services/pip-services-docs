
```cs
using PipServices3.Commons.Config;
using PipServices3.Prometheus.Services;

var service = new PrometheusMetricsService();

service.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

```
