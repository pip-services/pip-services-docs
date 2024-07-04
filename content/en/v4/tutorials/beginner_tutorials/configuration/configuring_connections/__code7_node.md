
```ts
let config = ConfigParams.fromTuples(
    "connection.protocol", "http34343", 
    "connection.host", "host123", 
    "connection.uri", "uri321"
);
let connection = ConnectionParams.fromConfig(config); // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}

```
