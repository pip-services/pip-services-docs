
```dart
void main(List<String> argument) async {
  // Step 1 - Database selection
  // Env:
  //  'MYSQL_ENABLED': 'true' 
  //    or
  //  'POSTGRES_ENABLED': 'true'

  // Step 2 - The run() command
  var proc = HelloFriendProcess();
  proc.run(argument);
}

```
