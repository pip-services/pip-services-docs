
```cs
var value = new AnyValueMap(new Dictionary<object, object>{
    {"key1", 1 },
    { "key2", "123.456"},
    { "key3", "2018-01-01"} });
value.SetAsObject("key1", 2);          // Returns {"key1": 2, "key2": "123.456", "key3": "2018-01-01"}

```
