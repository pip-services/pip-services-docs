
```ts
import { Descriptor } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";

let factory1 = new Factory()
factory1.registerAsType(new Descriptor("mygroup", "mycomponent1", "default", "*", "1.0"), MyComponent1)
compositeFactory.add(factory1)
```
