
```cs
// String converter

using PipServices3.Commons.Convert;

var value1 = StringConverter.ToString(123.456);                         // Returns '123.456'
var value2 = StringConverter.ToString(true);                            // Returns 'True'
var value3 = StringConverter.ToString(new DateTime(2018, 10, 1));       // Returns '2018-10-01T00:00:00Z'
var value4 = StringConverter.ToString(new List<string>() { "a", "b", "c" });    // Returns 'a,b,c'
var value5 = StringConverter.ToString(null);                            // Returns ""
var value6 = StringConverter.ToNullableString(null);                    // Returns null
var value7 = StringConverter.ToStringWithDefault(null, "my default");   // Returns 'my default' 

```
