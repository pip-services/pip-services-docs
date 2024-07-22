
```go
connection := conn.NewEmptyConnectionParams()

connection.SetDiscoveryKey("discovery key 1")
connection.SetHost("localhost")
connection.SetPort(8080)
connection.SetProtocol("http")
connection.SetUri("abc.com")

fmt.Println(connection)  // Returns {'discovery_key': 'discovery key 1', 'host': 'localhost', 'port': '8080', 'protocol': 'http', 'uri': 'abc.com'}
```
