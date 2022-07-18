
```cs
class MyCommandableHttpClient extends CommandableHttpClient {
  MyCommandableHttpClient(String baseRoute) : super(baseRoute);

  Future<String> greeting(String correlationId) async {
    return await callCommand('greeting', correlationId, {'name': 'Peter'});
  }
}

```
