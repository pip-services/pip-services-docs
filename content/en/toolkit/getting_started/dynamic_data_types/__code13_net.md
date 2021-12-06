
```cs
// Replace a value
var value = new AnyValueArray(new List<int> { 1, 2, 3 });
value.Set(0, "ABC");   // Returns ABC,2,3

// Append a value
var myList = new List<int>{1, 3, 4};
value.Add(myList);  // Returns ABC,2,3,1,3,4


```
