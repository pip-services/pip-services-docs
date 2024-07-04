
```ts
import { Descriptor, Factory  } from "pip-services4-components-node";

let factory1 = new Factory()
factory1.registerAsType(new Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"), MyComponent1)
compositeFactory.add(factory1)
```
