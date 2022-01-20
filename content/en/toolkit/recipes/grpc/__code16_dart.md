
```dart
// Pre-requisites
import 'package:grpc/grpc.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_grpc/pip_services3_grpc.dart';

import 'generated/summator.pbgrpc.dart' as command;
import 'summator.dart';

// gRPC server
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
    
var client = MyGrpcClient();
client.configure(ConfigParams.fromTuples([
    'connection.host', 'localhost', 
    'connection.port', 50055
]));

client.setReferences(References());

await service.open(null);
```
