
```cs
var configWithSections = ConfigParams.FromTuples(
  "param1", 123,
  "options.param1", "ABC",
  "options.param2", "XYZ"
);
var options = configWithSections.GetSection("options");

```


