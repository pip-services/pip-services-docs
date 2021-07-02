---
type: docs
title: "MethodReflector"
linkTitle: "MethodReflector"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public static` getMethodNames(obj: any): string[]

- **obj**: any - objec to introspect.
- **returns**: string[] - list with method names.

#### hasMethod
Checks if an object has a method with a specified name..

> `public static` hasMethod(obj: any, name: string): boolean

- **obj**: any - object to introspect.
- **name**: string - name of the method to check.
- **returns**: boolean - true if the object has the method and false if it doesn't.

#### invokeMethod
Invokes an object method by its name with specified parameters.

> `public static` invokeMethod(obj: any, name: string, ...args: any[]): any

- **obj**: any - object to invoke.
- **name**: string - name of the method to invoke.
- **args**: any[] - list of method arguments.
- **returns**: any - result of the method invocation or null if the method returns void.

### Examples

```typescript
let myObj = new MyObject();
  
let methods = MethodReflector.getMethodNames();
MethodReflector.hasMethod(myObj, "myMethod");
MethodReflector.invokeMethod(myObj, "myMethod", 123);

```
