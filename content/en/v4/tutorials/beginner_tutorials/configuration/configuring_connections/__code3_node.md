
```ts
let connection = new ConnectionParams();

connection.setDiscoveryKey("discovery key 1");
connection.setHost("localhost");
connection.setPort(8080);
connection.setProtocol("http");
connection.setUri("abc.com");

console.log(connection);  // Returns {'discovery_key': 'discovery key 1', 'host': 'localhost', 'port': '8080', 'protocol': 'http', 'uri': 'abc.com'}


```
