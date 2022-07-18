---
type: docs
title: "MethodReflector"
linkTitle: "MethodReflector"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

---

### Description

The MethodReflector class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

**Important points**

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing. Moreover, because all languages have different casing and case sensitivity rules, this class treats all method names as case insensitive.

### Static methods

#### getMethodNames
Gets the names of all the methods implemented in a specified object.

> `static` List\<String\> getMethodNames(obj)

- **obj**: dynamic - objec to introspect.
- **returns**: List\<String\> - list with method names.

#### hasMethod
Checks if an object has a method with a specified name..

> `static` bool hasMethod(obj, String name)

- **obj**: dynamic - object to introspect.
- **name**: String - name of the method to check.
- **returns**: bool - true if the object has the method and false if it doesn't.

#### invokeMethod
Invokes an object method by its name with specified parameters.

> `static` dynamic invokeMethod(obj, String name, List args)

- **obj**: dynamic - object to invoke.
- **name**: String - name of the method to invoke.
- **args**: List - list of method arguments.
- **returns**: dynamic - result of the method invocation or null if the method returns void.

### Examples

```dart
var myObj =  MyObject();

var methods = MethodReflector.getMethodNames();
MethodReflector.hasMethod(myObj, 'myMethod');
MethodReflector.invokeMethod(myObj, 'myMethod', 123);

```
