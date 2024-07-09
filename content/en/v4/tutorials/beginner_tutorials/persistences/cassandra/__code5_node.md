
```ts
let persistence = new MyCassandraPersistence();
  
persistence.configure(ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 9042,
    'connection.datacenter', 'datacenter1',
    "connection.username", "cassandra",
    "connection.password", "cassandra",
));

await persistence.open(null);
```
