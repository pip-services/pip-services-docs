
```dart
class MyGrpcClient extends GrpcClient {
  MyGrpcClient() : super('Summator');

  Future<double> getData(
      String? correlationId, double value1, double value2) async {
    var request = command.Number1(value1: value1, value2: value2);
    var response = await call<command.Number1, command.Number2>(
        'sum', correlationId, request);

    return response.writeToJsonMap().values.toList()[0];
  }
}
```
