
```go
config := cconfig.NewConfigParamsFromTuples(
	"descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123,
)
name := cconfig.NameResolver.Resolve(config) // Result: connector1
```
