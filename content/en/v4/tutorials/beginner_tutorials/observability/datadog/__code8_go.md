
```go
logger := dlog.NewDataDogLogger()
logger.Configure(context.Background(), conf.NewConfigParamsFromTuples(
	"credential.access_key", "e1be2e70036b8f05f2777f5f038fc222",
))
_ = logger.Open(context.Background())
```
