
```ts
import { Descriptor } from "pip-services4-components-node";

export function main() {
  let locator = new Descriptor("mygroup", "connector", "aws", "default", "1.0");

  console.log(locator.getGroup());   // returns "my_group"
  console.log(locator.getKind());    // returns "aws"
  console.log(locator.getName());    // returns "default"
  console.log(locator.getVersion()); // returns "1.0"
}
```
