
**‍‍/lib/src/HelloWorldProcess.dart**

```dart
import 'package:pip_services3_rpc/pip_services3_rpc.dart';
import 'package:pip_services3_container/pip_services3_container.dart';
import './HelloWorldServiceFactory.dart';

class HelloWorldProcess extends ProcessContainer {
  HelloWorldProcess() : super('hello-world', 'HelloWorld microservice') {
    configPath = './config.yaml';
    factories.add(HelloWorldServiceFactory());
    factories.add(DefaultRpcFactory());
  }
}
```
