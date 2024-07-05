
```ts
let controller = new PrometheusMetricsController();

controller.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));
```
