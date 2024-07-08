
```ts
import { RandomInteger } from "pip-services4-data-node"

export function main() {
    // Random value between 5 and 10
    let value1 = RandomInteger.nextInteger(5, 10);     // Possible result: 5

    // Random value lower than 10
    let value2 = RandomInteger.nextInteger(10);        // Possible result: 4

    // Random value
    let value3 = RandomInteger.updateInteger(10, 3);   // Possible result: 12
}
```
