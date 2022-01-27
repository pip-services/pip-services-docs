
```go
config := cconf.NewConfigParamsFromTuples(
	// Common config
	"source", "my_component_log",
	"level", clog.Debug,
	
	// Elastic config
	"index", "log",
	"daily", true,
	"date_format", "yyyyMMdd",
	"connection.host", "localhost",
	"connection.port", 9200,
    "connection.protocol", "http",
)

```
