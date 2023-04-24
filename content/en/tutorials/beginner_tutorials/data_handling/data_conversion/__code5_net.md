
```cs
// Float converter
using PipServices3.Commons.Convert;

var value1 = FloatConverter.ToFloat("123.456");                 // Returns 123.456
var value2 = FloatConverter.ToFloat("ABC");                     // Returns 0
var value3 = FloatConverter.ToFloatWithDefault("123.456", 0);   // Returns 123.456
var value4 = FloatConverter.ToFloatWithDefault("ABC", 0);       // Returns 0
var value5 = FloatConverter.ToNullableFloat("123.456");         // Returns 123.456
var value6 = FloatConverter.ToNullableFloat("ABC");             // Returns null
var value7 = FloatConverter.ToNullableFloat(true);              // Returns 1


```
