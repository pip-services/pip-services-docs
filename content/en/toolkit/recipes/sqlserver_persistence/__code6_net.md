
```cs
var persistence = new MySqlServerPersistence();
persistence.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 1433,
    "connection.database", "pip",
    "credential.username", "user",
    "credential.password", "password"
));

```
