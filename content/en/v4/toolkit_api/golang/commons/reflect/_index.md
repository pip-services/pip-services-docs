---
type: docs
title: "Reflect"
linkTitle: "Reflect"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >

    The Reflect package contains classes that can be used to examine the properties, methods and type of a class. In addition, it can be used to dynamically set the values of a property and create objects of a specific type.

---
---

<div class="module-body"> 

### Classes

#### [MethodReflector](method_reflector)
Helper class used to perform method introspection and dynamic invocation.
This class has symmetric implementation across all languages supported
by Pip.Services toolkit and used to support dynamic data processing.
Because all languages have different casing and case sensitivity rules,
this MethodReflector treats all method names as case insensitive.

#### [ObjectReader](object_reader)
Helper class used to perform property introspection and dynamic reading.
In contrast to [PropertyReflector](property_reflector) which only introspects regular objects,
this ObjectReader is also able to handle maps and arrays.
For maps, properties are key-pairs identified by string keys,
For arrays, properties are elements identified by integer index.  

#### [ObjectWriter](object_writer)
Helper class used to perform property introspection and dynamic writing.
In contrast to [PropertyReflector](property_reflector), which only introspects regular objects,
this ObjectWriter is also able to handle maps and arrays.
For maps, properties are key-pairs identified by string keys,
For arrays, properties are elements identified by integer index.

#### [PropertyReflector](property_reflector)
Helper class used to perform property introspection and dynamic reading and writing.
This class has symmetric implementation across all languages supported
by the Pip.Services toolkit and used to support dynamic data processing.
Because all languages have different casing and case sensitivity rules,
this [PropertyReflector](property_reflector) treats all property names as case insensitive.

#### [RecursiveObjectReader](recursive_object_reader)
Helper class used to perform property introspection and dynamic reading.
It is similar to [ObjectReader](object_reader) but reads properties recursively
through the entire object graph. Nested property names are defined
using dot notation as "object.subobject.property"

#### [RecursiveObjectWriter](recursive_object_writer)
Helper class to perform property introspection and dynamic writing.
It is similar to [ObjectWriter](object_writer) but writes properties recursively
through the entire object graph. Nested property names are defined
using dot notation as "object.subobject.property"

#### [TypeDescriptor](type_descriptor)
Descriptor that points to a specific object type by it's name
and optional library (or module) where this type is defined.
This class has symmetric implementation across all languages supported
by the Pip.Services toolkit and used to support dynamic data processing.

#### [TypeMatcher](type_matcher)
Descriptor that points to a specific object type by it's name
and optional library (or module) where this type is defined.
This class has symmetric implementation across all languages supported
by the Pip.Services toolkit and used to support dynamic data processing.

#### [TypeReflector](type_reflector)
Helper class used to perform object type introspection and object instantiation.
This class has symmetric implementation across all languages supported
by the Pip.Services toolkit and used to support dynamic data processing.
Because all languages have different casing and case sensitivity rules,
this TypeReflector treats all type names as case insensitive.

</div>

