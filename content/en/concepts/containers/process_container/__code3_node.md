
```ts
import { Factory } from "pip-services3-components-nodex";

export class MyFactory extends Factory {
    public constructor() {
        super();

        this.registerAsType(new Descriptor("myservice", "MyComponentA", "*", "*", "1.0"), MyComponentA);
    }
}
```
