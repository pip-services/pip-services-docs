
```cs
// Long converter

using PipServices3.Commons.Convert;

var value1 = LongConverter.ToLong("123.456");               // Returns 123
var value2 = LongConverter.ToLong("ABC");                   // Returns 0
var value3 = LongConverter.ToNullableLong("123.456");       // Returns 123
var value4 = LongConverter.ToNullableLong("ABC");           // Returns null
var value5 = LongConverter.ToNullableLong(true);            // Returns 1
var value6 = LongConverter.ToLongWithDefault("123.456", 0); // Returns 123
var value7 = LongConverter.ToLongWithDefault("ABC", 0);     // Returns 0

```
