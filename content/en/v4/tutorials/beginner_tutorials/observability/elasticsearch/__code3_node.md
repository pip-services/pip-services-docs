
```ts
let logger = new ElasticSearchLogger();

logger.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200
));

logger.open(ctx)
```
