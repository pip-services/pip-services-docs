
```dart
var persistence = BeaconsMongoDbPersistence();
await persistence.open("test");

var beacon = BeaconV1(
    id: '1', 
    site_id: "0001",
    udi: "0002"
);

await persistence.set("test", beacon);
let item = persistence.getOneByUdi("test", "0002");
await persistence.close("test");
print(item.udi); // Result: 0002

```

