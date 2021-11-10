
```ts
import { ConfigParams } from "pip-services3-commons-nodex";
import { JsonFilePersister } from "pip-services3-data-nodex";

let persister = new JsonFilePersister<string>();
let myConfig = ConfigParams.fromTuples("path", "./data.json");
persister.configure(myConfig);

```
