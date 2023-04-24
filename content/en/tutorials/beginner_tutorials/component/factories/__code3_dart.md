
```dart
var factory = Factory();
factory.registerAsType(
    Descriptor('mygroup', 'mycomponent1', 'default', '*', '1.0'),
    MyComponent1);
var component1 = factory
    .create(Descriptor('mygroup', 'mycomponent1', 'default', 'name1', '1.0'));
```
