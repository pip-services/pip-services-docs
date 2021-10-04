
```cs

var defaultConfig = ConfigParams.FromTuples(
  "param1", 1,
  "param2", "Default Value"
);
config = config.SetDefaults(defaultConfig);

```


