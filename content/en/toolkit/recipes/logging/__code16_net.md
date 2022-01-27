
```cs
var references = References.FromTuples(
    new Descriptor("my-component", "logger", "console", "default", "1.0"), elasticSearchLogger,
    new Descriptor("my-component", "logger", "elasticsearch", "default", "1.0"), consoleLogger
);

```
