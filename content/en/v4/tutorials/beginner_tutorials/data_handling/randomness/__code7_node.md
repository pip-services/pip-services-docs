
```ts
import { RandomString } from "pip-services4-data-node"

export function main() {
    let value1 = RandomString.distort("hello John"); // Possible result: Hello john
    let value2 = RandomString.nextAlphaChar(); // Possible result: C
    let value3 = RandomString.nextString(5, 10); // Possible result .h*_N9}
    let value4 = RandomString.pick([ "A", "B", "C", "D", "E" ]); // Possible result: c
}
```
