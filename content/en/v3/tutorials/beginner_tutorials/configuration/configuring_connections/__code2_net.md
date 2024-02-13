
```cs
using PipServices3.Commons.Config;
using PipServices3.Components.Connect;

var config = ConfigParams.FromTuples("protocol", "http34343", "host", "host123", "uri", "uri321");
var connection = new ConnectionParams(config); // Returns {'protocol': 'http34343', 'host': 'host123', 'uri': 'uri321'}
```
