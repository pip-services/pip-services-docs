
```ts
let database1 = new MyIdentifiableMySqlPersistence();
database1.configure(ConfigParams.fromTuples(
    "connection.host", host,
    "connection.port", port,
    "connection.database", db_name,
    "credential.username", user,
    "credential.password", password
));

```
