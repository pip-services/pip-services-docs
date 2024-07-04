
```ts
import { Descriptor, Factory } from "pip-services4-components-node";

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
