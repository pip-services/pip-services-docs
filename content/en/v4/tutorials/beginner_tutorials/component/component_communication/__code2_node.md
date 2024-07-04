
```ts
import { ConfigParams } from "pip-services4-components-node";
import { PrometheusMetricsController } from "pip-services4-prometheus-node";

let controller = new PrometheusMetricsController();

controller.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));
```
