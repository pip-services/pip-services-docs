
```cs
var config = ConfigParams.FromTuples(
    "host", "broker1,broker2",
    "port", ",8082",
    "username", "user",
    "password", "pass123",
    "param1", "ABC",
    "param2", "XYZ",
    "param3", null
);

var config2 = ConnectionUtils.Include(config, "username", "password");

```
