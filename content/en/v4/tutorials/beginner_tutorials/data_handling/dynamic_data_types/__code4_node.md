
```ts
import { AnyValue } from "pip-services4-commons-node"

let value = new AnyValue("123.456");

let value1 = value.getAsInteger();                  // Returns 123
let value2 = value.getAsLong();                     // Returns 123
let value3 = value.getAsFloat();                    // Returns 123.456   

let valueB = new AnyValue("ABC");
let value4 = valueB.getAsIntegerWithDefault(25);    // Returns 25

let value5 = value.getAsString();                   // Returns '123.456'
let value6 = value.getAsStringWithDefault("ABC");   // Returns '123.456'

valueB = new AnyValue("1");
let value7 = valueB.getAsBoolean();                 // Returns True

let valueC = new AnyValue("abc");
let value8 = valueC.getAsBooleanWithDefault(false); // Returns False

let type1 = value.getTypeCode();                    // Returns 1 (TypeCode.String)
```
