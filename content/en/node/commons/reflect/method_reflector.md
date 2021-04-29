---
type: docs
title: "MethodReflector"
linkTitle: "MethodReflector"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class to perform method introspection and dynamic invocation.

    This class has symmetric implementation across all languages supported
    by Pip.Services toolkit and used to support dynamic data processing.

    Because all languages have different casing and case sensitivity rules,
    this MethodReflector treats all method names as case insensitive.
---

**Example:**

```typescript
let myObj = new MyObject();
  
let methods = MethodReflector.getMethodNames();
MethodReflector.hasMethod(myObj, "myMethod");
MethodReflector.invokeMethod(myObj, "myMethod", 123);

```


### Methods

#### getMethodNames
Gets names of all methods implemented in specified object.

> `public static` getMethodNames(obj: any): string[]

- **obj**: any - an objec to introspect.
- **returns**: string[] - a list with method names.

#### hasMethod
Checks if object has a method with specified name..

> `public static` hasMethod(obj: any, name: string): boolean

- **obj**: any - an object to introspect.
- **name**: string - a name of the method to check.
- **returns**: boolean - true if the object has the method and false if it doesn't.

#### invokeMethod
Invokes an object method by its name with specified parameters.

> `public static` invokeMethod(obj: any, name: string, ...args: any[]): any

- **obj**: any - an object to invoke.
- **name**: string -a name of the method to invoke.
- **args**: any[] - a list of method arguments.
- **returns**: any - the result of the method invocation or null if method returns void.