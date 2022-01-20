
```dart
class MyGrpcService extends command.SummatorServiceBase with GrpcService {
  MyGrpcService() {
    serviceName = 'Summator.service';
  }

  @override
  Future<command.Number2> sum(ServiceCall call, command.Number1 request) async {
    var res = summator(request.value1, request.value2);
    return command.Number2(value: res);
  }

  @override
  void register() {
    registerService(this);
  }
}
```
