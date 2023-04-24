
```dart
// Creating a factory
var MyFactory1 = Factory();

MyFactory1.registerAsType(
    Descriptor('myservice', 'mycomponentA', 'default', '*', '1.0'),
    MyComponentA);

MyFactory1.registerAsType(
    Descriptor('myservice', 'mycomponent-b', 'default', '*', '1.0'),
    MyComponentB);

```
