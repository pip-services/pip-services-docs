
```ts
import { DataDogLogger } from 'pip-services4-datadog-node';

let logger = new DataDogLogger();

logger.configure(ConfigParams.fromTuples(
    "credential.access_key", "827349874395872349875493"
));

logger.setLevel(5);

await logger.open(ctx);

logger.info(ctx, "My message");

```
