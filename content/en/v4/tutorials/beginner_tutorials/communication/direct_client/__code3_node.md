
```ts
import { Descriptor, References } from "pip-services4-components-node";

// Reference settig
client.setReferences(References.fromTuples(
    new Descriptor("pip-services", "service", "service", "default", "1.0"), myService));
```
