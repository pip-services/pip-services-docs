
```cs
// Array converter

using PipServices3.Commons.Convert;

var value1 = ArrayConverter.ToArray(new List<int>() { 1, 2 });                  // Returns [1, 2]
var value2 = ArrayConverter.ToArray(1);                                         // Returns [1]
var value3 = ArrayConverter.ToArrayWithDefault(null, new List<object>() { 1 }); // Returns [1]
var value4 = ArrayConverter.ListToArray("1,2,3");                               // Returns ['1', '2', '3']
var value5 = ArrayConverter.ToNullableArray("1,2");                             // Returns ['1,2']

```
