
```ts
import { ConfigParams } from 'pip-services4-components-node';

let persistence = new MyPostgresPersistence();
persistence.configure(ConfigParams.fromTuples(
    'connection.host', 'localhost',
    'connection.port', 5432,
    'connection.database', 'pip1',
    'credential.username', 'postgres',
    'credential.password', 'admin'
));

```
