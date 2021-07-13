---
type: docs
title: "Commons module"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
no_list: true
weight: 30
description: > 
    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    It provides a set of tools used in microservices or backend services, and it is designed to facilitate
    symmetric implementation accross different programming languages.

---


### Packages

The module contains the following packages:

* [**Commands**](commands) - commands and events 
* [**Config**](config) - component configuration
* [**Convert**](convert) - portable value converters
* [**Data**](data) - data patterns
* [**Errors**](errors) - application errors
* [**Random**](random) - random data generators
* [**Refer**](refer) - component dependencies (Based on the inversion of control (IoC) pattern)
* [**Reflect**](reflect) - portable reflection utilities
* [**Run**](run) - component life-cycle management
* [**Validate**](validate) - validation rules



### Use

Add this to your package's pubspec.yaml file:
```yaml
dependencies:
  pip_services3_commons: version
```

Now you can install package from the command line:
```bash
pub get
```

Then you are ready to start using the Pip.Services patterns to augment your backend code.

For instance, here is how you can implement a component, that receives configuration, get assigned references,
can be opened and closed using the patterns from this module.

```dart
import 'package:pip_services3_commons/src/config/IConfigurable.dart';
import 'package:pip_services3_commons/src/config/ConfigParams.dart';
import 'package:pip_services3_commons/src/refer/IReferenceable.dart';
import 'package:pip_services3_commons/src/refer/IReferences.dart';
import 'package:pip_services3_commons/src/refer/Descriptor.dart';
import 'package:pip_services3_commons/src/run/IOpenable.dart';

class MyComponentA implements IConfigurable, IReferenceable, IOpenable {
  MyComponentA();

  String _param1 = "ABC";
  int _param2 = 123;
  MyComponentB _anotherComponent;
  bool _opened = true;

  configure(ConfigParams config) {
    this._param1 = config.getAsStringWithDefault("param1", this._param1);
    this._param2 = config.getAsIntegerWithDefault("param2", this._param2);
  }

  setReferences(IReferences refs) {
    this._anotherComponent = refs.getOneRequired<MyComponentB>(
        new Descriptor("myservice", "mycomponent-b", "*", "*", "1.0"));
  }

  isOpen() {
    return this._opened;
  }

  open(String correlationId) {
    return Future(() {
      this._opened = true;
      print("MyComponentA has been opened.");
    });
  }

  close(String correlationId) {
    return Future(() {
      this._opened = true;
      print("MyComponentA has been closed.");
    });
  }
}
```

Then here is how the component can be used in the code

```dart
import 'package:pip_services3_commons/src/config/ConfigParams.dart';
import 'package:pip_services3_commons/src/refer/References.dart';
import 'package:pip_services3_commons/src/refer/DependencyResolver.dart';

MyComponentA myComponentA = MyComponentA();

// Configure the component
myComponentA.configure(ConfigParams.fromTuples([
  'param1', 'XYZ',
  'param2', 987
]));

// Set references to the component
myComponentA.setReferences(References.fromTuples([
   Descriptor("myservice", "mycomponent-b", "default", "default", "1.0",) myComponentB
]));

// Open the component
myComponentA.open("123");
```