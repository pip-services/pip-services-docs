
```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';

void main(List<String> arguments) async {
  var myClassA = ClassA();
  // Obtain all methods in classA

  var methods1 = MethodReflector.getMethodNames(myClassA);
  print('The methods in myClassA are: $methods1');

  // Ask whether a specific method exists or not
  var methods2 = MethodReflector.hasMethod(myClassA, 'methodA');
  print('methodA belongs to myClassA: $methods2');

  var methods3 = MethodReflector.hasMethod(myClassA, 'methodC');
  print('methodC belongs to myClassA: $methods3');

  // Invoke a method in classA
  var methods4 = MethodReflector.invokeMethod(myClassA, 'methodA', []);
  print('After running methodA the result is: $methods4');
}

class ClassA {
  int methodA() {
    return 123;
  }

  void methodB() {
    print('hello world b');
  }
}


```
