
```ts
import { Descriptor, Factory } from "pip-services4-components-node";

export class MyFactory extends Factory {
    public constructor() {
        super();

        this.registerAsType(new Descriptor("myservice", "MyComponentA", "*", "*", "1.0"), MyComponentA);
    }
}
```
