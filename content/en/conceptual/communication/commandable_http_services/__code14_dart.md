
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';


export async function main() { 
    
    var client = MyCommandableHttpClient('commandable_hello_friend');
    client.configure(ConfigParams.fromTuples([
      'connection.protocol', 'http',
      'connection.host', 'localhost',
      'connection.port', 8080
    ]));

    await client.open(null);

    var data = await client.greeting('123'); // Returns 'Hello, Peter !'
    print(data);
}

class MyCommandableHttpClient extends CommandableHttpClient {
  MyCommandableHttpClient(String baseRoute) : super(baseRoute);

  Future<String> greeting(String correlationId) async {
    return await callCommand('greeting', correlationId, {'name': 'Peter'});
  }
}

```

