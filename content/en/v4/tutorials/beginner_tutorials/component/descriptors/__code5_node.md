
```ts
import { Descriptor } from "pip-services4-components-node";

export function main() {
  let locator1 = new Descriptor("mygroup", "connector", "aws", "default", "1.0");
  let locator2 = Descriptor.fromString("mygroup:connector:*:*:1.0");

  locator1.isComplete();   // returns True
  locator2.isComplete();   // returns False
}
```
