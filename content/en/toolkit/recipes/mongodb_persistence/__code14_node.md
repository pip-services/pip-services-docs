
```typescript
let persistence = new BeaconsMongoDbPersistence();
await persistence.open(null);
let beacon = <BeaconV1>{
    id: '1', 
    site_id: "0001",
    udi: "0002"

};

await persistence.set("test", beacon)
let item = await persistence.getOneByUdi("test", "0002")
console.log(item.udi) // Result: 0002
let page = await persistence.getPageByFilter("test", FilterParams.fromTuples("udi", "0002"), null)

console.log(page.data.length) // Result: 1
console.log(page.data[0].udi)   // Result: 0002
await persistence.close("test")

```

