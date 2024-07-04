
```ts
import { ElasticSearchLogger } from 'pip-services4-elasticsearch-node';

let logger = new ElasticSearchLogger();

logger.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200
));

logger.setLevel(5);

await logger.open(ctx);

logger.info(ctx, "My message");
```
