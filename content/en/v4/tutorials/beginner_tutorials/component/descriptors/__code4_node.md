
```ts
import { Descriptor } from "pip-services4-components-node";

export function main() {
  let locator1 = new Descriptor("mygroup", "connector", "aws", "default", "1.0");
  console.log(locator1.toString());
}
```
