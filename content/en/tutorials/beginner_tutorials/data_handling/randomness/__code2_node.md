
```ts
import { RandomBoolean } from "pip-services3-commons-nodex";


export function main() {
    let value1 = RandomBoolean.nextBoolean();   // Possible result: True
    let value2 = RandomBoolean.chance(1, 3);    // Possible result: False
}

```
