
```dart
void main(List<String> argument) {
  try {
    var proc = HelloFriendProcess();
    proc.run(argument);
  } catch (ex) {
    print(ex);
  }
}

```
