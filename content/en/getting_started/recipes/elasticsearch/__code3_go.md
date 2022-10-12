
```go
logger := ellog.NewElasticSearchLogger()
logger.Configure(context.Background(), cconf.NewConfigParamsFromTuples(
	"connection.protocol", "http",
	"connection.host", "localhost",
	"connection.port", 9200,
))
err := logger.Open(context.Background(), "123")
if err != nil {
	panic(err)
}
```
