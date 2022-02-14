
```cs
using PipServices3.Commons.Config;

var config = ConfigParams.FromTuples(
    "connection.protocol", "http34343", 
    "connection.host", "host123", 
    "connection.uri", "uri321"
);
var connection = ConnectionParams.FromConfig(config); // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}

```
