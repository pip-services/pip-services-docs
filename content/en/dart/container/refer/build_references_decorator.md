---
type: docs
title: "BuildReferencesDecorator"
linkTitle: "BuildReferencesDecorator"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-container-dart"
description: >
    Reference decorator that automatically creates missing components using
    available component factories upon component retrival.
---

**Implements:** [ReferencesDecorator](../references_decorator)


### Description
The BuildReferencesDecorator class allows you to create a reference decorator that automatically creates missing components using availale component factories upon component retrieval.

### Constructors
Creates a new instance of the decorator.

> BuildReferencesDecorator([IReferences](../../../commons/refer/ireferences) nextReferences, [IReferences](../../../commons/refer/ireferences) topReferences)

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - decorator at the top of the chain.

### Instance methods

#### clarifyLocator
Clarifies a component locator by merging two descriptors into one to replace missing fields.
That allows to get a more complete descriptor that includes all possible fields.

> dynamic clarifyLocator(locator, [IFactory](../../../components/build/ifactory) factory)
- **locator**: dynamic - component locator to clarify.
- **factory**: [IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: dynamic - clarified component descriptor (locator)

#### create
Creates a component identified by the given locator.

> dynamic create(locator, [IFactory](../../../components/build/ifactory) factory)
- **locator**: dynamic - locator used to identify the component to be created.
- **factory**: [IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: dynamic - created component.

#### find
Gets all component references that match the specified locator.

Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to True but no references are found.

> List\<T\> find\<T\>(locator, bool required)
- **locator**: dynamic - locator to find a reference by.
- **required**: bool - it true, it forces to raise an exception when no reference is found.
- **returns**: List\<T\> - list with matching component references.


#### findFactory
Finds a factory capable creating a component by a given descriptor
from the components registered in the references.

> [IFactory](../../../components/build/ifactory) findFactory(locator)
- **locator**: dynamic - locator of the component to be created.
- **returns**: [IFactory](../../../components/build/ifactory) - found factory or null if no factory was found.
