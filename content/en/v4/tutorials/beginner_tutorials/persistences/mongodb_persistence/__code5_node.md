
```ts
export class MyMongoDbPersistence extends MongoDbPersistence<MyData> {
    public constructor() {
        super('mydata');
    }
}
        
let persistence = new MyMongoDbPersistence();

let config = ConfigParams.fromTuples(
    "connection.host", "localhost",
    "connection.port", 27017,
    "connection.database", "pipdatabase"
);
persistence.configure(config);

await persistence.open(null);


```
