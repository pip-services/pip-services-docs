
```dart
var persistence = BeaconsMongoDbPersistence();

persistence.configure(ConfigParams.fromTuples([
  'connection.host',
  'localhost',
  'connection.port',
  '30000',
  'connection.database',
  'test'
]));

await persistence.open('test');

var beacon = BeaconV1(id: '1', site_id: '0001', udi: '0002');

await persistence.set('test', beacon);
var item = await persistence.getOneByUdi('test', '0002');
print(item!.udi); // Result: 0002

var page = await persistence.getPageByFilter(
    'test', FilterParams.fromTuples(['udi', '0002']), null);

print(page.data.length); // Result: 1
print(page.data[0].udi); // Result: 0002

await persistence.close('test');


```

