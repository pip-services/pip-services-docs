
```dart
void main(List<String> argument) {
  try {
    var proc = MyDataProcess();
    proc.run(argument);
  } catch (ex) {
    print(ex);
  }
}
```