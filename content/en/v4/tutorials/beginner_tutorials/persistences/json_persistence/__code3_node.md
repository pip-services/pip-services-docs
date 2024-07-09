
```ts
import { ConfigParams } from "pip-services4-components-node";
import { JsonFilePersister } from "pip-services4-persistence-node";

let persister = new JsonFilePersister<string>();
let myConfig = ConfigParams.fromTuples("path", "./data.json");
persister.configure(myConfig);
```
