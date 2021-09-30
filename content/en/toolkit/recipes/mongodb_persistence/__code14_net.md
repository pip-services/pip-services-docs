
```cs
var persistence = new BeaconMongoDbPersistence();
await persistence.OpenAsync();

var beacon = new BeaconV1
{
    name: "Super Beacon"
};

await persistence.SetAsync("test", beacon);
var item = await persistence.GetByNameAsync("test", "Super Beacon");
Console.Out.WriteLine(item);                   // Result: { name: "Super Beacon" }

var itemsPage = await persistence.GetPageByFilterAsync("test", FilterParams.FromTuples(
	"name", "Super Beacon"
), null);

Console.Out.WriteLine(itemsPage.Data.Count); // Result: 1
Console.Out.WriteLine(itemsPage.Data[0]); // Result: { name: "Super Beacon" }

await persistence.CloseAsync("test");


```

