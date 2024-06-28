
```go
config := conf.NewConfigParamsFromTuples("retry_timeout", 200)
lock.Configure(context.Background(), config)
```
