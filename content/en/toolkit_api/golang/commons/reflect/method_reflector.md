---
type: docs
title: "MethodReflector"
linkTitle: "MethodReflector"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Helper class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

---

### Description

The MethodReflector class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing. Moreover, because all languages have different casing and case sensitivity rules, this class treats all method names as case insensitive.

### Methods

#### GetMethodNames
Gets the names of all methods implemented in specified object.

> (c *TMethodReflector) GetMethodNames(obj interface{}) []string

- **obj**: interface{} - objec to introspect.
- **returns**: []string - list with method names.

#### HasMethod
Checks if an object has a method with a specified name..

> (c *TMethodReflector) HasMethod(obj interface{}, name string) bool

- **obj**: interface{} - object to introspect.
- **name**: string - name of the method to check.
- **returns**: bool - true if the object has the method and false if it doesn't.

#### InvokeMethod
Invokes an object method by its name with specified parameters.

> (c *TMethodReflector) InvokeMethod(obj interface{}, name string, args ...interface{}) interface{}

- **obj**: interface{} - object to invoke.
- **name**: string - name of the method to invoke.
- **args**: ...interface{} - list of method arguments.
- **returns**: interface{} - result of the method invocation or nil if the method returns void.

### Examples

```go
myObj = MyObject();
 
methods = MethodReflector.GetMethodNames();
MethodReflector.HasMethod(myObj, "myMethod");
MethodReflector.InvokeMethod(myObj, "myMethod", 123);
```
