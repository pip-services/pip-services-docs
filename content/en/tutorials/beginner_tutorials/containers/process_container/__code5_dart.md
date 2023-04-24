
```dart
void main(List<String> argument) {
  try {
    var proc = MyProcess();
    proc.run(argument);
  } catch (ex) {
    print(ex);
  }
}
```
