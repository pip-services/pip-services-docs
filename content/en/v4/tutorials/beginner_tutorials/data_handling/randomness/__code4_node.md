
```ts
import { RandomDouble } from "pip-services4-data-node"

export function main() {
    // Random value between 5 and 10
    let value1 = RandomDouble.nextDouble(5, 10);      // Possible result: 7.3252274575446155

    // Random value lower than 10
    let value2 = RandomDouble.nextDouble(10);      // Possible result: 8.104104435251225

    // Random value 
    let value3 = RandomDouble.updateDouble(10, 5);      // Possible result: 8.051623143638789
}
```
