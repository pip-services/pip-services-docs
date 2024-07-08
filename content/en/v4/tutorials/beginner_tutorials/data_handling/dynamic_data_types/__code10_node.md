
```ts
// Constructor
let value1 = new AnyValueArray([ 1, 2, 3 ]);

// String
let myString = "1.2.3";
let value2 = AnyValueArray.fromString(myString, '.');

// List
let myList = [1, 2, 3];
let value = AnyValueArray.fromValue(myList);

// Cloning
value2 = value.clone();  // Returns value2 as AnyValueArry with values 1,2,3
```
