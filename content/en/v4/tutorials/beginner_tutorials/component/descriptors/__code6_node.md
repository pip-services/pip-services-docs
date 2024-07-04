
```ts
import { Descriptor } from "pip-services4-components-node";

export function main() {
  let locator1 = new Descriptor("mygroup", "connector", "aws", "default", "1.0");
  let locator2 = Descriptor.fromString("mygroup:connector:*:*:1.0");
  let locator3 = Descriptor.fromString("mygroup:connector:aws:default:1.0");

  locator1.match(locator2);       // returns True
  locator1.exactMatch(locator2);  // returns False
  locator1.equals(locator3);      // returns True
}
```
