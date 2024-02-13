
```cs
var logger = new ElasticSearchLogger();

logger.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200
));

logger.OpenAsync("123");
```
