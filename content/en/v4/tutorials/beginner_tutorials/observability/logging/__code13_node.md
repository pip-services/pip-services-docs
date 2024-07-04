
```ts
let config = ConfigParams.fromTuples(
    // Common config
    "source", "my_component_log",
    "level", LogLevel.Debug,
    // Elastic config
    "index", "log",
    "daily", true,
    "date_format", "YYYYMMDD",
    "connection.host", "localhost",
    "connection.port", 9200,
    "connection.protocol", "http",
);
```
