
```dart
class Worker1 {
    Worker1(name) {
        this._defaultName = name || "Default name1";
    }

    void do(level, message) {
        print('Write to ${this._defaultName}.${level} message: ${message}');
    }
}

class Worker2 {
    Worker2(name) {
        this._defaultName = name || "Default name2";
    }

    void do(level, message) {
        print('Write to ${this._defaultName}.${level} message: ${message}');
    }
}


```

