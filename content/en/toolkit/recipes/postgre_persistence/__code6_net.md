
```cs
using PipServices3.Commons.Config;

var persistence = new MyPostgresPersistence();
persistence.Configure(ConfigParams.FromTuples(
    "host", "localhost",
    "port", 5432,
    "connection.database", "pip1",
    "credential.user", "postgres",
    "credential.password", "admin"
));

await persistence.OpenAsync(null)
```
