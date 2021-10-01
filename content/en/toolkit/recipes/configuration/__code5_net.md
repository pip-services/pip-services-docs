
```cs

var defaultConfig = ConfigParams.FromTuples(
  "param1", 1,
  "param2", "Default Value"
);
var config = config.SetDefaults(defaultConfig);

```


