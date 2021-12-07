
```dart
// Example: create a ConfigParams object containing {'section1.key1': 'AAA', 'section1.key2': '123', 'section2.key1': 'True'}

// Constructor

var myDict = {
  'section1.key1': 'AAA',
  'section1.key2': 123,
  'section2.key1': true
};
var config1 = ConfigParams(myDict);

// Tuple
var config2 = ConfigParams.fromTuples(['section1.key1', 'AAA', 'section1.key2', 123, 'section2.key1', true]);

// String
var config3 = ConfigParams.fromString('section1.key1=AAA;section1.key2=123;section2.key1=True');

// Object containing key:value pairs
myDict = {
  'section1.key1': 'AAA',
  'section1.key2': 123,
  'section2.key1': true
};
var config4 = ConfigParams.fromValue(myDict);

```
