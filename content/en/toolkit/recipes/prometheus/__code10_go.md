
```go
service := pservice.NewPrometheusMetricsService()

service.Configure(cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 8080,
))
```
