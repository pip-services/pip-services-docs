
```ts
import { CloudWatchLogger } from 'pip-services3-aws-nodex';

let logger = new CloudWatchLogger();

logger.configure(ConfigParams.fromTuples(
    "stream", "mystream",
    "group", "mygroup",
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX"
));

logger.setLevel(5);

await logger.open("123");

logger.info("123", "My message");

```
