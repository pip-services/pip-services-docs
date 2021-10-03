
```ts
import { ElasticSearchLogger } from 'pip-services-elasticsearch-nodex';

let logger = new ElasticSearchLogger();

logger.configure(ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 9200
));

logger.setLevel(5);

logger.info("123", "My message");

```
