
```dart
// Pre-requisites
import 'package:grpc/grpc.dart';
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_grpc/pip_services3_grpc.dart';

import 'generated/summator.pbgrpc.dart' as command;
import 'summator.dart';

// gRPC server
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
    
var client = MyGrpcClient();
client.configure(ConfigParams.fromTuples([
  "connection.protocol", "http",
  'connection.host', 'localhost', 
  'connection.port', 50055
]));

client.setReferences(References());

await service.open(null);
```
