
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_rpc/pip_services3_rpc.dart';

void main(List<String> argument) {
  // Instantiation
  var myController = MyController();

  // Instantiation
  var client = MyDirectClient();

  client.setReferences(References.fromTuples([
    Descriptor('pip-services', 'controller', 'controller', 'default', '1.0'),
    myController
  ]));

  client.myMethod();
}

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

class MyController implements IConfigurable, IReferenceable {
  void configure(ConfigParams config) {}

  void setReferences(IReferences references) {}

  void myMethod() {
    print('Hello world');
  }
}

```
