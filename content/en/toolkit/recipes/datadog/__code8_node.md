
```ts
import { ConfigParams } from 'pip-services3-commons-nodex';

let logger = new DataDogLogger();
logger.configure(ConfigParams.fromTuples(
    "credential.access_key", "e1be2e70036b8f05f2777f5f038fc222"
));

await logger.open(null);
```
