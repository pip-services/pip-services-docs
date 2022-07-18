
```cs
using PipServices3.Commons.Config;

var persistence = new MyPostgresPersistence();

persistence.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", "5432",
    "connection.database", "pip1",
    "credential.username", "postgres",
    "credential.password", "admin"
));

```
