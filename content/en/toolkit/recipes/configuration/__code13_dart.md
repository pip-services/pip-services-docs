
```dart
var configReader = JsonConfigReader('config.json');
var parameters = ConfigParams.fromTuples(['KEY1_VALUE', 123, 'KEY2_VALUE', 'ABC']);

var result = await configReader.readConfig('correlationId', parameters); // Result: key1=123;key2=ABC

```

