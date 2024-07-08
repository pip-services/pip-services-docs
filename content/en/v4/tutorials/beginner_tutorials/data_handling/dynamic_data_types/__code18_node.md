
```ts

let value = new AnyValueMap({
    "key1": 1,
    "key2": "123.456",
    "key3": "2018-01-01",
    "key4": "word"
});

let value1 = value.getAsBoolean("key1");   // Returns: true
let value2 = value.getAsInteger("key2");   // Returns: 123
let value3 = value.getAsIntegerWithDefault("key4", 0);   // Returns 0
let value4 = value.getAsFloat("key2");     // Returns: 123.456
let value5 = value.getAsDateTime("key3");  // Returns new 2018-0-1
let valueA = new AnyValueMap({ 
    "key1": 1,
    "key2":  { "key": "123.456" },
    "key3": "2018-01-01" 
}); // redact

let value6 = valueA.getAsMap("key2");      // Returns {'key': '123.456'}
let value7 = value.getAsNullableDateTime("key2");     // Returns null
let value8 = value.getAsNullableDateTime("key3");     // Returns 2018-0-1
let value9 = value.getAsString("key1");    // Returns '1'
let value10 = value.getAsObject();                     // Returns {'key1': 1, 'key2': '123.456', 'key3': '2018-01-01'}

let value11 = value.getAsType(TypeCode.String, "key1");     // Returns '1'
let value12 = value.getAsValue("key1");

```
