
```dart

class BeaconsProcess extends ProcessContainer {
  BeaconsProcess() : super('beacons', 'Beacons microservice') {
    factories.add(BeaconsServiceFactory());
    factories.add(DefaultRpcFactory());
  }
}



```

