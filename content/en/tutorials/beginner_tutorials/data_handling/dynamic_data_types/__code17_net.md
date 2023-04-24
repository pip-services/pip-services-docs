
```cs
// Constructor
var value = new AnyValueMap(new Dictionary<object, object> {
    { "key1", 1 },
    {"key2", "123.456" },
    {"key3", "2018-01-01" }
});    // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Cloning
var value2 = value.Clone();   // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Maps
var myMap1 = new AnyValueMap(new Dictionary<object, object> {
    { "key1", 1 },
    {"key2", "123.456" },
    {"key3", "2018-01-01" }
});

var myMap2 = new Dictionary<object, object> {
    { "key4", 2},
    { "key5", 3},
    {"key6", 4 }
};

value = AnyValueMap.FromMaps(myMap1, myMap2);    // Returns {"key1": 1,"key2": "123.456","key3": "2018-01-01","key4": 2,"key5": 3,"key6": 4} 

// Tuples
value = AnyValueMap.FromTuples("key1", 1, "key2", "123.456", "key3", "2018-01-01");     // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Array of tuples
var myTuple = new object[] { "key1", 1, "key2", "123.456", "key3", "2018-01-01" };
value = AnyValueMap.FromTuplesArray(myTuple);  // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Values
var myValue = new List<int> { 1, 2 };
value = AnyValueMap.FromValue(myValue);       // Returns {"0": 1, "1": 2}

```
