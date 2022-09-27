
```dart
// Constructor
var value = AnyValueMap({
  'key1': 1,
  'key2': '123.456',
  'key3': '2018-01-01'
}); // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Cloning
var value2 = value.clone(); // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

  // Maps
  var myMap1 = AnyValueMap({'key1': 1, 'key2': '123.456', 'key3': '2018-01-01'});

var myMap2 = {
  'key4': 2,
  'key5': 3,
  'key6': 4,
};

value = AnyValueMap.fromMaps([
  myMap1,
  myMap2
]); // Returns {"key1": 1,"key2": "123.456","key3": "2018-01-01","key4": 2,"key5": 3,"key6": 4}

// Tuples
value = AnyValueMap.fromTuples([
  'key1',
  1,
  'key2',
  '123.456',
  'key3',
  '2018-01-01'
]); // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Array of tuples
var myTuple = ['key1', 1, 'key2', '123.456', 'key3', '2018-01-01'];
value = AnyValueMap.fromTuplesArray(myTuple); // Returns {"key1": 1, "key2": "123.456", "key3": "2018-01-01"}

// Values
var myValue = [1, 2];
value = AnyValueMap.fromValue(myValue); // Returns {"0": 1, "1": 2}

```
