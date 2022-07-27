
```ts
import { JsonFilePersister } from "pip-services3-data-nodex";

// Create the JSON persistence component
let persister = new JsonFilePersister<string>("./data.json");

// Save data on the JSON persistence object
await persister.save("123", ["A1", "B1", "C1"]);

// Read data from the JSON persistence object
let items = await persister.load("123");

console.log(items);
```
