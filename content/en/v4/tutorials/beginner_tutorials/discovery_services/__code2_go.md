
```go
config := cconf.NewConfigParamsFromTuples(
	"key1.host", "10.1.1.100",
	"key1.port", "8080",
	"key2.host", "10.1.1.100",
	"key2.port", "8082",
)

discovery := cconn.NewEmptyMemoryDiscovery()
```
