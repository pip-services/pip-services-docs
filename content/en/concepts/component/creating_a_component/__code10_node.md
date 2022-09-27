
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  try {
    // Step 1 - Creation
    var myComponentA = MyComponentA();
    var myComponentB = MyComponentB();

    // Step 2 - Configure the component
    myComponentA
        .configure(ConfigParams.fromTuples(['param1', 'XYZ', 'param2', '987']));

    // Step 3 - Referencing
    // Set references to the component
    myComponentA.setReferences(References.fromTuples([
      Descriptor('myservice', 'mycomponent-b', 'default', 'default', '1.0'),
      myComponentB
    ]));

    // Step 4 - Openning
    await myComponentA.open('123');

    // Step 5 - Execution
    myComponentA.myTask('123');

    // Step 6 - Closing
    await myComponentA.close('123');

    // Step 7 - Un-referencing
    myComponentA.unsetReferences();
  } finally {
    // Step 8 - Destruction
    print('Component destroyed');
  }
}
```

