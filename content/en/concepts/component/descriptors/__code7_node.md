
```ts
import { Descriptor } from "pip-services3-commons-nodex";
import { Factory } from "pip-services3-components-nodex";

export function main() {
    let MyFactory1 = new Factory();
    let classADescriptor = new Descriptor("mygroup", "class", "classA", "classA", "1.0");

    MyFactory1.registerAsType(classADescriptor, ClassA);

    MyFactory1.create(classADescriptor);
}

class ClassA{
    public constructor() {
        console.log("ClassA created");
    }
}
```
