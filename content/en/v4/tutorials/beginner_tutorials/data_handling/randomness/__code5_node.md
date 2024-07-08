
```ts
import { RandomFloat } from "pip-services4-data-node"

export function main() {
    // Random value between 5 and 10
    let value1 = RandomFloat.nextFloat(5, 10);     // Possible result: 8.109282778264653

    // Random value lower than 10
    let value2 = RandomFloat.nextFloat(10);        // Possible result: 5.281760648272185

    // Random value
    let value3 = RandomFloat.updateFloat(10, 3);   // Possible result: 7.731874405844179
}
```
