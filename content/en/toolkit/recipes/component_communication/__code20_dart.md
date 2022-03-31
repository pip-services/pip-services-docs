
```dart
var references = References.fromTuples([
  Descriptor('pip-services', 'metrics-service', 'prometheus', 'default', '1.0'), service,
  Descriptor('pip-services', 'metrics-service', 'prometheus', 'default', '2.0'), service2,
  Descriptor('pip-services', 'counters', 'prometheus', 'default', '1.0'), counters,
  Descriptor('pip-services', 'context-info', 'default', '*', '1.0'), ContextInfo('tutorial', 'Example context conmponent'),
  Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), ConsoleLogger()
]);
```
