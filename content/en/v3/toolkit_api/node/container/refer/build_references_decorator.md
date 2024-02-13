---
type: docs
title: "BuildReferencesDecorator"
linkTitle: "BuildReferencesDecorator"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
description: >
    References decorator that automatically creates missing components using
    available component factories upon component retrival.
---

**Implements:** [ReferencesDecorator](../references_decorator)


### Description
The BuildReferencesDecorator class allows you to create a references decorator that automatically creates missing components using availale component factories upon component retrieval.

### Constructors
Creates a new instance of the decorator.

> `public` constructor(nextReferences: [IReferences](../../../commons/refer/ireferences), topReferences: [IReferences](../../../commons/refer/ireferences))

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - the next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - the decorator at the top of the chain.

### Instance methods

#### clarifyLocator
Clarifies a component locator by merging two descriptors into one to replace missing fields.
That allows to get a more complete descriptor that includes all possible fields.

> `public` clarifyLocator(locator: any, factory: [IFactory](../../../components/build/ifactory)): any
- **locator**: any - component locator to clarify.
- **factory**: [IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: any - clarified component descriptor (locator)

#### create
Creates a component identified by the given locator.

> `public` create(locator: any, factory: [IFactory](../../../components/build/ifactory)): any
- **locator**: any - locator used to identify the component to be created.
- **factory**: [IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: any - created component.

#### find
Gets all component references that match the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to True but no references are found.

> `public` find\<T\>(locator: any, required: boolean): T[]
- **locator**: any - locator to find a reference by.
- **required**: boolean - it True, it forces to raise an exception when no reference is found.
- **returns**: T[] - list with matching component references.


#### findFactory
Finds a factory capable creating a component by given descriptor
from the components registered in the references.

> `public` findFactory(locator: any): [IFactory](../../../components/build/ifactory)
- **locator**: any - locator of the component to be created.
- **returns**: [IFactory](../../../components/build/ifactory) - found factory or null if no factory was found.
