
```go
component := configurationexample.NewDataService()
config := cconfig.NewConfigParamsFromTuples("max_page_size", 100)
component.Configure(context.Background(), config)
```
