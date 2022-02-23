
```cs
var config = ConfigParams.FromTuples(
    "connections.key1.host", "10.1.1.100",
    "connections.key1.port", "8080",
    "connections.key2.host", "10.1.1.100",
    "connections.key2.port", "8082"
);

var discovery = new MemoryDiscovery(config);

```
