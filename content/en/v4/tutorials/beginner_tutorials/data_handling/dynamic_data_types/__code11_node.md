
```ts
// Find out if it contains a value
let value = new AnyValueArray([ 1, "123.456", "2018-01-01" ]);

let res = value.contains(1); // Returns True

let result = value.containsAsType(TypeCode.Integer, 1);   // Returns True

```
