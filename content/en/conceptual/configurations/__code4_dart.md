
```dart
var config = ConfigParams.fromTuples(['section1.key1', 'AAA', 'section1.key2', 123, 'section2.key1', true]);
var section1 = config.getSection('section1'); // Returns {'key1': 'AAA', 'key2': '123'}

```
