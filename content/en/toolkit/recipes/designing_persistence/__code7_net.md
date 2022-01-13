
```cs
var persistence = new MyIdentifiableMySqlPersistence();
persistence.Configure(ConfigParams.FromTuples(
    "connection.host", host,
    "connection.port", port,
    "connection.database", db_name,
    "credential.username", user,
    "credential.password", password
));
```
