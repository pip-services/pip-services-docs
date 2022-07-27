
```go
myRestService := NewMyRestService()

myRestService.Configure(config.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 15239,
))

myRestService.Open("123")

```
