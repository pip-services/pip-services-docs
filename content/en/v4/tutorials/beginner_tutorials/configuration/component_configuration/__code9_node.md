
```ts
import { ConfigParams, NameResolver } from "pip-services4-components-node"

let config = ConfigParams.fromTuples(
	"descriptor", "myservice:connector:aws:connector1:1.0",
	"param1", "ABC",
	"param2", 123
);

let name = NameResolver.resolve(config); // Result: connector1

```
