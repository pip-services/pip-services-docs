
```ts
import { CloudWatchLogger } from 'pip-services4-aws-node';

let logger = new CloudWatchLogger();

logger.configure(ConfigParams.fromTuples(
    "stream", "mystream",
    "group", "mygroup",
    "connection.region", "us-east-1",
    "connection.access_id", "XXXXXXXXXXX",
    "connection.access_key", "XXXXXXXXXXX"
));

logger.setLevel(5);

await logger.open(ctx);

logger.info(ctx, "My message");
```
