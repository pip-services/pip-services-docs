
```dart
// Pre-requisites
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';


// Direct client
class MyDirectClient extends DirectClient<MyController> {
  MyDirectClient() {
    dependencyResolver.put('controller',
        Descriptor('pip-services', 'controller', '*', '*', '1.0'));
  }

  @override
  void setReferences(IReferences references) {
    dependencyResolver.setReferences(references);
    controller = dependencyResolver.getOneRequired<MyController>('controller');
  }

  void myMethod() {
    controller.myMethod();
  }
}


// Instantiation
var client = MyDirectClient();
```
