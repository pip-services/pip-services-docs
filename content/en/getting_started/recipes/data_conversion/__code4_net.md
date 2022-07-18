
```cs
// Double converter

using PipServices3.Commons.Convert;

var value1 = DoubleConverter.ToDouble("123.456");               // Returns 123.456
var value2 = DoubleConverter.ToDouble("ABC");                   // Returns 0
var value3 = DoubleConverter.ToDoubleWithDefault("123.456", 0); // Returns 123.456
var value4 = DoubleConverter.ToDoubleWithDefault("ABC", 0);     // Returns 0
var value5 = DoubleConverter.ToNullableDouble("123.456");       // Returns 123.456
var value6 = DoubleConverter.ToNullableDouble("ABC");           // Returns null
var value7 = DoubleConverter.ToNullableDouble(true);            // Returns 1

```
