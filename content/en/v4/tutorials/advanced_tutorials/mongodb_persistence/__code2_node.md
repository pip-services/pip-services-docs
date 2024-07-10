
```ts

let persistence = new BeaconsMongoDbPersistence();
// ...

await persistence.open(ctx);

let beacon = <BeaconV1>{
    id: '1', 
    site_id: "0001",
    udi: "0002"

};

await persistence.set(ctx, beacon);
let item = persistence.getOneByUdi(ctx, "0002");
await persistence.close(ctx);
console.log(item.udi); // Result: 0002



```
