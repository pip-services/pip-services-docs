
```ts
import { AnyValueArray, AnyValueMap, TypeCode } from "pip-services4-commons-node"

let value = new AnyValueArray([ 1, "123.456", "2018-01-01" ]);

// Get a value for a specified index
let value1 = value.get(0);  // Returns 1, type int

let value2 = value.getAsBoolean(0); // Returns True
let value3 = value.getAsBooleanWithDefault(1, false);   // Returns False
let value4 = value.getAsNullableBoolean(2); // Returns null

let value5 = value.getAsInteger(1); // Returns 123
let value6 = value.getAsIntegerWithDefault(3, 0);   // Returns 0
let value7 = value.getAsNullableInteger(3); // Returns null

let value8 = value.getAsLong(1);    // Returns 123
let value9 = value.getAsLongWithDefault(3, 0);  // Returns 0
let value10 = value.getAsNullableLong(3);   // Returns null

let value11 = value.getAsFloat(1);  // Returns 123.456
let value12 = value.getAsFloatWithDefault(3, 0.0); // Returns 0.0
let value13 = value.getAsNullableFloat(3);  // Returns null

let value14 = value.getAsDouble(1); // Returns 123.456
let value15 = value.getAsDoubleWithDefault(3, 0.0); // Returns 0.0
let value16 = value.getAsNullableDouble(3); // Returns null

let value17 = value.getAsDateTime(2);   // Returns 2018-01-01 00:00:00+00:00

let value18 = value.getAsDateTimeWithDefault(1, new Date());  // Returns (e.g) 2021-11-04

let value19 = value.getAsString(2); // Returns '2018-01-01'
let value20 = value.getAsNullableString(2); // Returns '2018-01-01'
let value21 = value.getAsStringWithDefault(2, "0000-00-00");    // Returns '2018-01-01'

let value22 = value.getAsArray(1);  // Returns ['123.456']
let value23 = value.getAsArrayWithDefault(0, new AnyValueArray([0]));   // Returns [1]
let value24 = value.getAsNullableArray(2);  // Returns ['2018-01-01']

let valueA = new AnyValueArray([1, { "number": "123.456" }, "2018-01-01" ]);
let value25 = valueA.getAsMap(1);   // Returns {'number': '123.456'}
value25 = valueA.getAsMapWithDefault(3, new AnyValueMap({ "key1": 1 })); // Returns {'key1': 1}
let value27 = valueA.getAsNullableMap(3);   // Returns null


let value28 = value.getAsType(TypeCode.DateTime, 2); // Returns 2018-01-01
let value29 = value.getAsTypeWithDefault(TypeCode.DateTime, 1, new Date());    // Returns today date
let value30 = value.getAsNullableType(TypeCode.DateTime, 1); // Returns null
```
