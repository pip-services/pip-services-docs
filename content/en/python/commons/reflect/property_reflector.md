---
type: docs
title: "PropertyReflector"
linkTitle: "PropertyReflector"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class to perform property introspection and dynamic reading and writing.

    This class has symmetric implementation across all languages supported
    by Pip.Services toolkit and used to support dynamic data processing.

    Because all languages have different casing and case sensitivity rules,
    this PropertyReflector treats all property names as case insensitive.
---

**Example:**

```python
myObj = MyObject()
properties = PropertyReflector.get_property_names()
PropertyReflector.has_property(myObj, "myProperty")

args = PropertyReflector.get_property(myObj, "myProperty")
PropertyReflector.set_property(myObj, "myProperty", 123)

```


### Methods

#### get_properties
Get values of all properties in specified object
and returns them as a map.

> `static` get_properties(obj: Any): Any

- **obj**: Any - an object to get properties from.
- **returns**: Any - a map, containing the names of the object's properties and their values.


#### get_property
Gets value of object property specified by its name.

> `static` getProperty(obj: Any, name: str): Any

- **obj**: Any - an object to read property from.
- **name**: str - a name of the property to get.
- **returns**: Any - the property value or null if property doesn't exist or introspection failed.

#### get_property_names
Gets names of all properties implemented in specified object.

> `static` get_property_names(obj: Any): List[str]

- **obj**: Any - an objec to introspect.
- **returns**: List[str] - a list with property names.

#### has_property
Checks if object has a property with specified name.

> `static` has_property(obj: Any, name: str): bool

- **obj**: Any - an object to introspect.
- **name**: str - a name of the property to check.
- **returns**: bool - true if the object has the property and false if it doesn't.

#### set_properties
Sets values of some (all) object properties.
 
If some properties do not exist or introspection fails
they are just silently skipped and no errors thrown.

> `static` set_properties(obj: Any, values: Any)

- **obj**: Any - an object to write properties to.
- **values**: Any - a map, containing property names and their values.


#### set_property
Sets value of object property specified by its name.

If the property does not exist or introspection fails
this method doesn't do anything and doesn't any throw errors.

> `static` set_property(obj: Any, name: str, value: Any)

- **obj**: Any - an object to write property to.
- **name**: str - a name of the property to set.
- **value**: Any - a new value for the property to set.










