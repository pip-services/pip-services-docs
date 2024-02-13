---
type: docs
title: "MethodReflector"
linkTitle: "MethodReflector"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

---

### Description

The MethodReflector class allows you to examine an object's methods (method instrospection) and to invoke them dynamically.

**Important points**

- This class has symmetric implementation across all languages supported by the Pip.Services toolkit and it is used to support dynamic data processing. Moreover, because all languages have different casing and case sensitivity rules, this class treats all method names as case insensitive.

### Static methods

#### get_method_names
Gets names of all methods implemented in specified object.

> `static` get_method_names(obj: Any): List[str]

- **obj**: Any - an objec to introspect.
- **returns**: List[str] - a list with method names.

#### has_method
Checks if object has a method with specified name..

> `static` has_method(obj: Any, name: str): bool

- **obj**: Any - an object to introspect.
- **name**: str - a name of the method to check.
- **returns**: bool - true if the object has the method and false if it doesn't.

#### invoke_method
Invokes an object method by its name with specified parameters.

> `static` invoke_method(obj: Any, name: str, args: Any): Any

- **obj**: Any - an object to invoke.
- **name**: str -a name of the method to invoke.
- **args**: Any - a list of method arguments.
- **returns**: Any - the result of the method invocation or None if method returns None.

### Examples

```python
myObj = new MyObject()

methods = MethodReflector.get_method_names()
MethodReflector.has_method(myObj, "myMethod")
MethodReflector.invoke_method(myObj, "myMethod", 123)

```
