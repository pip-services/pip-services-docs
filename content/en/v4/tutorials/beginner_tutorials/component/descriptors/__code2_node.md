
```ts
import { Descriptor } from "pip-services4-components-node";

export function main() {
  // Locate all connectors(match by type)
  let locator = Descriptor.fromString("*:connector:*:*:*");

  // Locate all connectors for a specific microservice(match by group and type)
  locator = Descriptor.fromString("mygroup:connector:*:*:*"); 

  // Locate a specific component(match by name)
  locator = Descriptor.fromString("*:*:*:my_name:*");
}
```