
```cs
var persistence = new BeaconMongoDbPersistence();
await persistence.OpenAsync("test");

var beacon = new BeaconV1
{
    name: "Super Beacon"
};
await persistence.SetAsync("test", beacon);
var item = await persistence.GetByNameAsync("test", "Super Beacon");
await persistence.CloseAsync("test");
Console.Out.WriteLine(item);                   // Result: { name: "Super Beacon" }



```

