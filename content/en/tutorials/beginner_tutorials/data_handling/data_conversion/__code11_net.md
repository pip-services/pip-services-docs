
```cs
// Recursive map
using PipServices3.Commons.Convert;

var value1 = RecursiveMapConverter.ToMap(new Dictionary<string, object>() { { "key", 123 } });              // Returns {'key': 123}
var value2 = RecursiveMapConverter.ToMapWithDefault(null, new Dictionary<string, object>() { { "my key", "my val" } });   // Returns { "my key": "my val" }
var value3 = RecursiveMapConverter.ToNullableMap(new Dictionary<string, object>() { { "key", 123 } });     // Returns {'key': 123}
var value4 = RecursiveMapConverter.ToNullableMap(new List<object> { 1, new List<object> { 2, 3 } }) ;         // Returns {0: 1, 1: {0: 2, 1: 3}}

```
