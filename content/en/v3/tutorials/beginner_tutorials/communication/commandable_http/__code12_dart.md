
```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

void main(List<String> argument) async {
    var client = http.Client();

    try {
      var response = await client.post(
          Uri.parse('http://localhost:8080/commandable_hello_friend/greeting'),
          body: json.encode({'name': 'Peter'}));
      var res = response.body;
      print(res);
    } finally {
      client.close();
    }
}

```
