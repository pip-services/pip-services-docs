
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { PrometheusMetricsService } from "pip-services3-prometheus-nodex";

let service = new PrometheusMetricsService();

service.Configure(ConfigParams.FromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 8080
));

```
