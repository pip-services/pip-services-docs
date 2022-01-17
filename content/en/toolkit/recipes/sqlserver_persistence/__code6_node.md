
```ts
import { ConfigParams } from 'pip-services3-commons-nodex';

let persistence = new MySqlServerPersistence();
persistence.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 1433,
    "connection.database", "pip",
    "credential.username", "user",
    "credential.password", "password"
));

```
