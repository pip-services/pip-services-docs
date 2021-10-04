
```go
config := cconfig.NewConfigParamsFromTuples(
	...
	"options.param1", "ABC",
	"options.param2", 123,
)
options := cconfig.OptionsResolver.Resolve(config) // Result: param1=ABC;param2=123
```
