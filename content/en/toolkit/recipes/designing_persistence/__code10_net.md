
```cs
var database2 = new MyIdentifiablePostgresPersistence();
database2.Configure(ConfigParams.FromTuples(
    "connection.host", host,
    "connection.port", port,
    "connection.database", db_name,
    "credential.username", user,
    "credential.password", password
));
```
