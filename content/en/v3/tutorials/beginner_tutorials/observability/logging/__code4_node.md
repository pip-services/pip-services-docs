
```ts

// Creating a factory

import { Factory } from 'pip-services3-components-nodex';

let MyFactory1 = new Factory();

MyFactory1.registerAsType(new Descriptor("myservice", "mycomponentA", "default", "*", "1.0"), MyComponentA)
MyFactory1.registerAsType(new Descriptor("myservice", "mycomponent-b", "default", "*", "1.0"), MyComponentB)

```
