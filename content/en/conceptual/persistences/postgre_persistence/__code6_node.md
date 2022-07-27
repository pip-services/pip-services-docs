
```ts
import { ConfigParams, FilterParams } from 'pip-services3-commons-nodex';

let persistence = new MyPostgresPersistence();
persistence.configure(ConfigParams.fromTuples(
    'connection.host', 'localhost',
    'connection.port', 5432,
    'connection.database', 'pip1',
    'credential.username', 'postgres',
    'credential.password', 'admin'
));
```
