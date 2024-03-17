---
type: docs
title: "MethodReflector"
linkTitle: "MethodReflector"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-commons-java"
description: >
    Helper class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

---

### Description

The MethodReflector class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing. Moreover, because all languages have different casing and case sensitivity rules, this class treats all method names as case insensitive.

### Static methods

#### getMethodNames
Gets the names of all methods implemented in specified object.

> `public static` List<String> getMethodNames(Object obj)

- **obj**: Object - objec to introspect.
- **returns**: List<String> - list with method names.

#### hasMethod
Checks if an object has a method with a specified name..

> `public static` boolean hasMethod(Object obj, String name)

- **obj**: Object - object to introspect.
- **name**: String - name of the method to check.
- **returns**: boolean - true if the object has the method and false if it doesn't.

#### invokeMethod
Invokes an object method by its name with specified parameters.

> `public static` Object invokeMethod(Object obj, String name, Object... args)

- **obj**: Object - object to invoke.
- **name**: String - name of the method to invoke.
- **args**: Object... - list of method arguments.
- **returns**: Object - result of the method invocation or null if the method returns void.


### Examples

```java
{
  MyObject myObj = new MyObject();
 
  List<String> methods = MethodReflector.getMethodNames();
  MethodReflector.hasMethod(myObj, "myMethod");
  MethodReflector.invokeMethod(myObj, "myMethod", 123);
  }

```
