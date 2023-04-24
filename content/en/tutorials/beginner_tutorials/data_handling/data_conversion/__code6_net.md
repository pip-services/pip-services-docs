
```cs
// IntegerConverter
using PipServices3.Commons.Convert;

var value1 = IntegerConverter.ToInteger("123.456");                 // Returns 123
var value2 = IntegerConverter.ToInteger("ABC");                     // Returns 0
var value3 = IntegerConverter.ToNullableInteger("123.456");         // Returns 123
var value4 = IntegerConverter.ToNullableInteger("ABC");             // Returns null
var value5 = IntegerConverter.ToNullableInteger(true);              // Returns 1
var value6 = IntegerConverter.ToIntegerWithDefault("ABC", 123);     // Returns 123 
var value7 = IntegerConverter.ToIntegerWithDefault("123.456", 123); // Returns 123 


```
