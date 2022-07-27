
```dart
class MyDataSchema extends ObjectSchema {
  MyDataSchema() : super() {
    withOptionalProperty('id', TypeCode.String);
    withRequiredProperty('key', TypeCode.String);
    withOptionalProperty('content', TypeCode.String);
  }
}
```
