
```dart
void main(List<String> arguments) async {
  try {
    var proc = MyProcess();
    proc.run(arguments);
  } catch (ex) {
    print(ex);
  }
}

```
