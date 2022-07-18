
```cs
// Boolean converter

using PipServices3.Commons.Convert;

var value1 = BooleanConverter.ToBoolean("yes");                 // Returns True
var value2 = BooleanConverter.ToBooleanWithDefault(true, false);// Returns True   
var value3 = BooleanConverter.ToBooleanWithDefault(123, false); // Returns False
var value4 = BooleanConverter.ToNullableBoolean(true);          // Returns True
var value5 = BooleanConverter.ToNullableBoolean("yes");         // Returns True
var value6 = BooleanConverter.ToNullableBoolean(123);           // Returns null
var value7 = BooleanConverter.ToNullableBoolean(new object());  // Returns null

```
