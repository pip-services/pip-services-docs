
```ts
let value = new AnyValue("123.456");
let value2 = value.clone();

let result1 = value.equals(value2);             // Returns True

let result2 = value.equalsAsType(TypeCode.Object, value2);   // Returns True
```
