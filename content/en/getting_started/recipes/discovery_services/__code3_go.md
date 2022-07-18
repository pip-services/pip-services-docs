
```go
config := cconf.NewConfigParamsFromTuples(
	"connections.key1.host", "10.1.1.100",
	"connections.key1.port", "8080",
	"connections.key2.host", "10.1.1.100",
	"connections.key2.port", "8082",
)

discovery := cconn.NewEmptyMemoryDiscovery()
discovery.Configure(config)

```
