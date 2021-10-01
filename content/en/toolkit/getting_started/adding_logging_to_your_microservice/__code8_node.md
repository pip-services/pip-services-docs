
```ts
import { DataDogLogger } from 'pip-services-datadog-nodex';

let logger = new DataDogLogger();

logger.configure(ConfigParams.fromTuples(
    "credential.access_key", "827349874395872349875493"
));

logger.setLevel(5);

logger.info("123", "My message");

```
