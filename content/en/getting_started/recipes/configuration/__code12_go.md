
```go
config := cconfig.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", "8080",
)

configReader := creader.NewEmptyMemoryConfigReader()
configReader.Configure(config)
parameters := cconfig.NewConfigParamsFromValue(os.Args)
configReader.ReadConfig("123", parameters) // Result: connection.host=localhost;connection.port=8080

```
