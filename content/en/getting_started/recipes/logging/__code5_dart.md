
```dart
// Creating a process container

class MyProcess extends ProcessContainer {
  MyProcess() : super('myservice', 'My service running as a process') {
    configPath = './config.yaml';
    factories.add(MyFactory1);
  }
}

```
