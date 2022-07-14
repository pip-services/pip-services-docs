
```dart
import 'package:pip_services3_components/pip_services3_components.dart';

class DefaultMyDataFactory extends Factory {
  static Descriptor FactoryDescriptor =
      Descriptor('service-mydata', 'factory', 'default', 'default', '1.0');
  static Descriptor ControllerDescriptor =
      Descriptor('service-mydata', 'controller', 'default', '*', '1.0');
  static Descriptor CommandableGrpcServiceDescriptor =
      Descriptor('service-mydata', 'service', 'commandable-grpc', '*', '1.0');

  DefaultMyDataFactory() : super() {
    registerAsType(DefaultMyDataFactory.ControllerDescriptor, MyDataController);
    registerAsType(DefaultMyDataFactory.CommandableGrpcServiceDescriptor,
        MyDataCommandableGrpcService);
  }
}

```
