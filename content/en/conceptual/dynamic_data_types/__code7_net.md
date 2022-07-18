
```cs
var value = new AnyValue("123.456");
var value2 = value.Clone();

var result1 = value.Equals(value2);             // Returns True


var result2 = value.EqualsAs<object>(value2);   // Returns True
```
