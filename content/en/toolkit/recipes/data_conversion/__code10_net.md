
```cs
// Map converter

using PipServices3.Commons.Convert;

var value1 = MapConverter.ToNullableMap("ABC");                                         // Returns null
var value2 = MapConverter.ToNullableMap(new Dictionary<string, object>() { { "key", 123 } });   // Returns { key: 123 }
var value3 = MapConverter.ToNullableMap(new List<int>() { 1, 2, 3 });                   // Returns { "0": 1, "1": 2, "2": 3 }
var value4 = MapConverter.ToMap("ABC");                                                 // Returns {}
var value5 = MapConverter.ToMapWithDefault("ABC", (Dictionary<string, object>)value2);  // Returns {'key': 123}
var value6 = MapConverter.ToMapWithDefault(new Dictionary<string, object>() { { "key", 12345 } }, (Dictionary<string, object>)value2); // Returns {'key': 12345}


```
