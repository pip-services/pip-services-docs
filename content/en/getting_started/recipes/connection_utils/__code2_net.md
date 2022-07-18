
```cs
using PipServices3.Commons.Config;
using PipServices3.Components.Connect;

var options = ConfigParams.FromTuples(
    "host", "broker1,broker2",
    "port", ",8082",
    "username", "user",
    "password", "pass123",
    "param1", "ABC",
    "param2", "XYZ",
    "param3", null
);

var uri = ConnectionUtils.ComposeUri(options, "tcp", 9092);

```
