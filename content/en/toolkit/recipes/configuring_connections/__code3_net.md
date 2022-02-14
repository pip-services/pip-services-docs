
```cs
connection = new ConnectionParams();

connection.DiscoveryKey = "discovery key 1";
connection.Host = "localhost";
connection.Port = 8080;
connection.Protocol = "http";
connection.Uri = "abc.com";

Console.WriteLine(connection);  // Returns {'discovery_key': 'discovery key 1', 'host': 'localhost', 'port': '8080', 'protocol': 'http', 'uri': 'abc.com'}

```
