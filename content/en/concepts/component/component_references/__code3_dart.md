
```dart
class Worker1 {
  String _defaultName;

  Worker1([String? name]) : _defaultName = name ?? 'Default name1';

  void do_(level, message) {
    print('Write to $_defaultName.$level message: $message');
  }
}

class Worker2 {
  String _defaultName;

  Worker2([String? name]) : _defaultName = name ?? 'Default name2';

  void do_(level, message) {
    print('Write to $_defaultName.$level message: $message');
  }
}


```

