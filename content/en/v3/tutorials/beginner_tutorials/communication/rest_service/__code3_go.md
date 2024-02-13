
```go
myRestService := NewMyRestService()

myRestService.Configure(context.Background(), config.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 15239,
))

_ = myRestService.Open(context.Background(), "123")

```
