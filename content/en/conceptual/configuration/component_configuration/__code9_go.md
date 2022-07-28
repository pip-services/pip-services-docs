
See: [NameResolver](../../../toolkit_api/golang/commons/config/name_resolver/), [OptionsResolver](../../../toolkit_api/golang/commons/config/options_resolver/)

```go
config := cconfig.NewConfigParamsFromTuples(
	"descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123,
)
name := cconfig.NameResolver.Resolve(config) // Result: connector1
```
