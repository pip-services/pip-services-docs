
```ts
import { ConfigParams } from 'pip-services3-commons-nodex';

let persistence = new MyMySqlPersistence();
persistence.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 3306,
    "credential.username", "user",
    "credential.password", "password",
    "connection.database", "pip"
));

```
