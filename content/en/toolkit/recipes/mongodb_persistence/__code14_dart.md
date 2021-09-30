
```dart

var persistence = BeaconsMongoDbPersistence();
await persistence.open(null);
var beacon = BeaconV1(
    id: '1';
    site_id: "0001";
    udi: "0002";
);



await persistence.set("test", beacon);
var item = await persistence.getOneByUdi("test", "0002");
print(item.udi); // Result: 0002
var page = await persistence.getPageByFilter("test", FilterParams.fromTuples("udi", "0002"), null);

parint(page.data.length);  // Result: 1
parint(page.data[0].udi);  // Result: 0002
await persistence.close("test");


```

