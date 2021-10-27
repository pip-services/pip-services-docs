
```dart
import 'package:pip_services3_container/pip_services3_container.dart';
import 'package:pip_services3_grpc/pip_services3_grpc.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_rpc/pip_services3_swagger.dart';

class MyProcess extends ProcessContainer {
  MyProcess() : super('mymicroservice', 'Sample microservice container') {
    factories.add(MyComponentFactory());
    factories.add(DefaultRpcFactory());
    factories.add(DefaultSwaggerFactory());
    factories.add(DefaultGrpcFactory());
  }
}


```
