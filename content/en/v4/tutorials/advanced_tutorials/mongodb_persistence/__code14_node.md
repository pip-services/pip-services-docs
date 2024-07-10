
```ts
let persistence = new BeaconsMongoDbPersistence();

persistence.Configure(cconf.NewConfigParamsFromTuples(
	"connection.host", "localhost",
	"connection.port", "30000",
	"connection.database", "test",
))

await persistence.open(null);

let beacon = <BeaconV1>{
    id: '1', 
    site_id: "0001",
    udi: "0002"
};

await persistence.set(ctx, beacon)
let item = await persistence.getOneByUdi(ctx, "0002")
console.log(item.udi) // Result: 0002
let page = await persistence.getPageByFilter(ctx, FilterParams.fromTuples("udi", "0002"), null)

console.log(page.data.length) // Result: 1
console.log(page.data[0].udi)   // Result: 0002
await persistence.close(ctx)


```
