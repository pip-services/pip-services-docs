
```cs
var value = new AnyValueMap(new Dictionary<object, object>{
    {"key1", 1 },
    {"key2", "123.456" },
    { "key3", "2018-01-01"}
});

var value1 = value.GetAsBoolean("key1");   // Returns: true
var value2 = value.GetAsInteger("key2");   // Returns: 123
var value3 = value.GetAsIntegerWithDefault("key3", 0);   // Returns 0
var value4 = value.GetAsFloat("key2");     // Returns: 123.456
var value5 = value.GetAsDateTime("key3");  // Returns new 2018-0-1
var valueA = new AnyValueMap(new Dictionary<object, object>{ 
    { "key1", 1}, 
    { "key2", new Dictionary<object, object>{ { "key", "123.456" } } },
    { "key3", "2018-01-01" }
}); // redact
var value6 = valueA.GetAsMap("key2");      // Returns {'key': '123.456'}
var value7 = value.GetAsNullableDateTime("key2");     // Returns null
var value8 = value.GetAsNullableDateTime("key3");     // Returns 2018-0-1
var value9 = value.GetAsString("key1");    // Returns '1'
var value10 = value.GetAsObject();                     // Returns {'key1': 1, 'key2': '123.456', 'key3': '2018-01-01'}

var value11 = value.GetAsType<string>("key1");     // Returns '1'
var value12 = value.GetAsValue("key1");

```
