
```ts
var value = new AnyValueMap({
    "key1": 1,
    "key2": "123.456",
    "key3": "2018-01-01" 
});
value.remove("key1");        // Returns value = {'key2': '123.456', 'key3': '2018-01-01'}


```
