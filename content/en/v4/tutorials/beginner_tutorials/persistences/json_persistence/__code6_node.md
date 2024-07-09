
```ts
import { JsonFilePersister } from "pip-services4-persistence-node";

// Create the JSON persistence component
let persister = new JsonFilePersister<string>("./data.json");

// Save data on the JSON persistence object
await persister.save(ctx, ["A1", "B1", "C1"]);

// Read data from the JSON persistence object
let items = await persister.load(ctx);

console.log(items);
```
