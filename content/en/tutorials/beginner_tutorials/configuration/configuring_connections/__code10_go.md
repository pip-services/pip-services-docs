
```go
connection.DiscoveryKey()                          // Returns "discovery key 1"
connection.Host()                                  // Returns "localhost"
connection.Port()                                  // Returns 8080
connection.PortWithDefault(5050)                   // Returns 8080 or 0000 if port not defined
connection.Protocol()                              // Returns "http"
connection.ProtocolWithDefault("default protocol") // Returns "http" or "default protocol" if protocol field not defined
connection.Uri()                                   // Returns "abc.com"
```
