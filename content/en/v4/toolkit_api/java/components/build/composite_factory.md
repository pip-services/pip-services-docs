---
type: docs
title: "CompositeFactory"
linkTitle: "CompositeFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Aggregates multiple factories into a single factory component.
   
---

**Implements**: [IFactory](../ifactory)

### Description

The CompositeFactory class allows you to aggregate multiple factories into a single factory component.

Important points

- When a new component is requested, it iterates through factories to locate the one able to create the requested component.
- Usually used to keep all supported factories in a single place.

### Constructors
Creates a new instance of the factory.

> `public` CompositeFactory([IFactory](../ifactory)... factories)

- **factories**: [IFactory](../ifactory)... - a list of factories to embed into this factory.


### Instance methods

#### add
Adds a factory into the list of embedded factories.

> `public` void add([IFactory](../ifactory) factory)

- **factory**: [IFactory](../ifactory) - a factory to be added.


#### canCreate
Checks if this factory is able to create component by a given locator.

This method searches for all registered components and returns
a locator for component it is able to create that matches the given locator.
If the factory is not able to create a requested component it returns null.

> `public` Object canCreate(Object locator)

- **locator**: Object - a locator to identify component to be created.
- **returns**: Object - a locator for a component that the factory is able to create.


#### create
Creates a component identified by given locator.

> `public` Object create(Object locator) throws CreateException

- **locator**: Object - a locator to identify component to be created.
- **returns**: Object - the created component.


#### remove
Removes a factory from the list of embedded factories.

> `public` void remove([IFactory](../ifactory) factory)

- **factory**: [IFactory](../ifactory) - the factory to remove.

### Examples

```java
{
  CompositeFactory factory = new CompositeFactory();
  factory.add(new DefaultLoggerFactory());
  factory.add(new DefaultCountersFactory());
 
  Descriptor loggerLocator = new Descriptor("*", "logger", "*", "*", "1.0");
  factory.canCreate(loggerLocator);        // Result: Descriptor("pip-service", "logger", "null", "default", "1.0")
  factory.create(loggerLocator);            // Result: created NullLogger
  }
```
