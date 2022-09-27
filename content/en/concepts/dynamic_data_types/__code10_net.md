
```cs
// Constructor
var value1 = new AnyValueArray(new List<int>() { 1, 2, 3 });

// String
var myString = "1.2.3";
object value2 = AnyValueArray.FromString(myString, '.');

// List
var myList = new List<int>() { 1, 2, 3 };
var value = AnyValueArray.FromValue(myList);

// Cloning
value2 = value.Clone();  // Returns value2 as AnyValueArry with values 1,2,3
```
