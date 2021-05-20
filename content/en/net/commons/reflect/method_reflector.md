---
type: docs
title: "MethodReflector"
linkTitle: "MethodReflector"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

---

### Description

The MethodReflector class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

Important points

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing. Moreover, because all languages have different casing and case sensitivity rules, this class treats all method names as case insensitive.

### Static methods

#### GetMethodNames
Gets names of all methods implemented in specified object.

> `public static` IEnumerable\<string\> GetMethodNames(object obj)

- **obj**: object - an objec to introspect.
- **returns**: IEnumerable\<string\> - a list with method names.

#### HasMethod
Checks if object has a method with specified name..

> `public static` bool HasMethod(object obj, string name)

- **obj**: object - an object to introspect.
- **name**: string - a name of the method to check.
- **returns**: bool - true if the object has the method and false if it doesn't.

#### InvokeMethod
Invokes an object method by its name with specified parameters.

> `public static` object InvokeMethod(object obj, string name, params object[] args)

- **obj**: object - an object to invoke.
- **name**: string -a name of the method to invoke.
- **args**: object[] - a list of method arguments.
- **returns**: object - the result of the method invocation or null if method returns void.

### Examples

```cs
var myObj = new MyObject();
var methods = MethodReflector.GetMethodNames();
MethodReflector.HasMethod(myObj, "myMethod");
MethodReflector.InvokeMethod(myObj, "myMethod", 123);

```
