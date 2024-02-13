
```cs
// Find out if it contains a value
var value = new AnyValueArray(new object[] { 1, "123.456", "2018-01-01" });

var res = value.Contains(1); // Returns True


var result = value.ContainsAs<int>(1);   // Returns True
```
