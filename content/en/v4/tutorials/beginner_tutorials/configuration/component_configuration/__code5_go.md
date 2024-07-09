
```go
defaultConfig := cconfig.NewConfigParamsFromTuples(
	"param1", 1,
	"param2", "Default Value",
)
config = config.SetDefaults(defaultConfig)
```
