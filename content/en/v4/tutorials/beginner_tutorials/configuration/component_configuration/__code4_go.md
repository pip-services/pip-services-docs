
```go
configWithSections := cconfig.NewConfigParamsFromTuples(
	"param1", 123,
	"options.param1", "ABC",
	"options.param2", "XYZ",
)
options := configWithSections.GetSection("options")
```
