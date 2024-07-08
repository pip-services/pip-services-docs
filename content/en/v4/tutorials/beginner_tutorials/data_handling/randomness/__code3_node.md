
```ts
import { RandomDateTime } from "pip-services4-data-node"

export function main() {
    // Possible result: 2015-01-05 00:00:00
    let value1 = RandomDateTime.nextDate(new Date(2010, 1, 1));

    // Possible result: 2012-01-03
    let value2 = RandomDateTime.nextDate(new Date(2010, 1, 1), new Date(2015, 1, 1));

    // Possible result: 2020-03-11 11:20:32
    let value3 = RandomDateTime.nextDate(new Date(2017, 1, 1));

    // Possible result: 2010-01-02 00:00:01
    let value4 = RandomDateTime.updateDateTime(new Date(2010, 1, 2), 50); 
}
```
