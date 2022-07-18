
```cs
var database1 = new MyIdentifiableMySqlPersistence();
database1.Configure(ConfigParams.FromTuples(
    "connection.host", host,
    "connection.port", port,
    "connection.database", db_name,
    "credential.username", user,
    "credential.password", password
));
```
