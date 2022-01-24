
```dart
class MyMongoDbPersistence extends MongoDbPersistence<MyData> {
  MyMongoDbPersistence() : super('mydata');
}
        
var persistence = MyMongoDbPersiste
var config = ConfigParams.fromTuple
  'connection.host', 'localhost',
  'connection.port', 27017,
  'connection.database', 'pipdatabase'
]);

persistence.configure(config);
await persistence.open('123');

```
