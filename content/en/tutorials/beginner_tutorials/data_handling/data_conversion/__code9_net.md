
```cs
// JSON converter
using PipServices3.Commons.Convert;

var value1 = JsonConverter.ToJson(new Dictionary<string, object> { { "key", 123 } });   // Returns '{"key": 123}'
var value2 = JsonConverter.FromJson<Dictionary<string, string>>("{\"key\":\"123\"}");   // Returns {'key': '123'}
var value3 = JsonConverter.ToMap(value1);                                               // Returns {'key': 123}
var value4 = JsonConverter.ToMapWithDefault(value1, new Dictionary<string, object> { { "my key", "my val" } }); // Returns {'key': 123}
var value5 = JsonConverter.ToMapWithDefault("{}", new Dictionary<string, object> { { "my key", "my val" } });   // Returns {}
var value6 = JsonConverter.ToNullableMap(value1);   // Returns {'key': 123}
var value7 = JsonConverter.ToNullableMap("{}");     // Returns {}

```
