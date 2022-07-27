
```dart
class MyDataCommandableGrpcService extends CommandableGrpcService {
  MyDataCommandableGrpcService(): super('mydata') {
    dependencyResolver.put('controller', Descriptor('service-mydata', 'controller', '*', '*', '*'));
  }
}
```
