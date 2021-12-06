
```dart
var value = AnyValueMap({'key1': 1, 'key2': '123.456', 'key3': '2018-01-01', 'key4': 'word'});

var value1 = value.getAsBoolean('key1'); // Returns: true
var value2 = value.getAsInteger('key2'); // Returns: 123
var value3 = value.getAsIntegerWithDefault('key4', 0); // Returns 0
var value4 = value.getAsFloat('key2'); // Returns: 123.456
var value5 = value.getAsDateTime('key3').toLocal(); // Returns new 2018-0-1
var valueA = AnyValueMap({
  'key1': 1,
  'key2': {'key': '123.456'},
  'key3': '2018-01-01'
}); // redact

var value6 = valueA.getAsMap('key2'); // Returns {'key': '123.456'}
var value7 = value.getAsNullableDateTime('key2'); // Returns null
var value8 = value.getAsNullableDateTime('key3')?.toLocal(); // Returns 2018-0-1
var value9 = value.getAsString('key1'); // Returns '1'
var value10 = value.getAsObject(); // Returns {'key1': 1, 'key2': '123.456', 'key3': '2018-01-01'}

var value11 = value.getAsType(TypeCode.String, 'key1'); // Returns '1'
var value12 = value.getAsValue('key1');
```
