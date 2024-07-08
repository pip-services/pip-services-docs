
```ts
import { RandomText } from "pip-services4-data-node"

export function main() {
    let value1 = RandomText.adjective();    // Possible result: Small
    let value2 = RandomText.color();        // Possible result: White
    let value3 = RandomText.email();        // Possible result: NickStay @Hotel.com
    let value4 = RandomText.fullName();     // Possible result; Dr.Pamela Smith
    let value5 = RandomText.noun();         // Possible result: Car
    let value6 = RandomText.phone();        // Possible result: (147) 371 - 7084
    let value7 = RandomText.phrase(3);      // Possible result: Large
    let value8 = RandomText.word();         // Possible result: Hurry
    let value9 = RandomText.verb();         // Possible result: Lay
    let value10 = RandomText.text(5, 20);   // Possible result: Small carmack large
}
```
