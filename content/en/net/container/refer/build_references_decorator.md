---
type: docs
title: "BuildReferencesDecorator"
linkTitle: "BuildReferencesDecorator"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-container-dotnet"
description: >
    References decorator that automatically creates missing components using
    available component factories upon component retrival.
---

**Inherits:** [ReferencesDecorator](../references_decorator)


### Description
The BuildReferencesDecorator class allows you to create a references decorator that automatically creates missing components using availale component factories upon component retrieval.

### Constructors
Creates a new instance of the decorator.

> `public` BuildReferencesDecorator([IReferences](../../../commons/refer/ireferences) baseReferences = null, [IReferences](../../../commons/refer/ireferences) parentReferences = null)

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - the next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - the decorator at the top of the chain.

### Instance methods

#### ClarifyLocator
Clarifies a component locator by merging two descriptors into one to replace missing fields.
That allows to get a more complete descriptor that includes all possible fields.

> `public` object ClarifyLocator(object locator, [IFactory](../../../components/build/ifactory) factory)
- **locator**: object - component locator to clarify.
- **factory**: [IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: object - clarified component descriptor (locator)

#### Create
Creates a component identified by the given locator.

> `public` object Create(object locator, [IFactory](../../../components/build/ifactory) factory)
- **locator**: object - locator used to identify the component to be created.
- **factory**: [IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: object - created component.

#### Find
Gets all component references that match the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to True but no references are found.

> `public override` List\<T\> Find\<T\>(object locator, bool required)

- **locator**: object - locator to find a reference by.
- **required**: bool - it True, it forces to raise an exception when no reference is found.
- **returns**: List\<T\> - list with matching component references.


#### FindFactory
Finds a factory capable creating a component by given descriptor
from the components registered in the references.

> `public` [IFactory](../../../components/build/ifactory) FindFactory(object locator)
- **locator**: object - locator of the component to be created.
- **returns**: [IFactory](../../../components/build/ifactory) - found factory or null if no factory was found.
