
```cs
var persistence = new BeaconMongoDbPersistence();

persistence.Configure(ConfigParams.FromTuples(
	"connection.host", "localhost",
	"connection.port", "30000",
	"connection.database", "test"
));

await persistence.OpenAsync();

var beacon = new BeaconV1
{
    Id: "1", 
    SiteId: "0001", 
    Udi: "0002"
};

await persistence.SetAsync("test", beacon);
var item = await persistence.GetByNameAsync("test", "0002");
Console.Out.WriteLine(item.Udi);    // Result: 0002

var itemsPage = await persistence.GetPageByFilterAsync("test", FilterParams.FromTuples(
	"udi", "0002"
), null);

Console.Out.WriteLine(itemsPage.Data.Count); // Result: 1
Console.Out.WriteLine(itemsPage.Data[0]); // Result: 0002

await persistence.CloseAsync("test");


```

