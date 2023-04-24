
```dart
void myTask(String? correlationId) {
  // create an artificial problem
  try {
    throw Exception('Logging demo. Error created');
  } catch (ex) {
    logger.error(correlationId, ex as Exception, 'Error created.');
  }
}

```
