---
type: docs
title: "BuildReferencesDecorator"
linkTitle: "BuildReferencesDecorator"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-container-go"
description: >
    References decorator that automatically creates missing components using
    available component factories upon component retrival.
---

**Implements:** [ReferencesDecorator](../references_decorator)


### Description
The BuildReferencesDecorator class allows you to create a references decorator that automatically creates missing components using availale component factories upon component retrieval.

### Constructors

#### NewBuildReferencesDecorator
Creates a new instance of the decorator.

> NewBuildReferencesDecorator(nextReferences [IReferences](../../../components/refer/ireferences), topReferences [IReferences](../../../components/refer/ireferences)) [*BuildReferencesDecorator]()

- **nextReferences**: [IReferences](../../../components/refer/ireferences) - the next references or decorator in the chain.
- **topReferences**: [IReferences](../../../components/refer/ireferences) - the decorator at the top of the chain.


### Methods

#### ClarifyLocator
Clarifies a component locator by merging two descriptors into one to replace missing fields.
That allows to get a more complete descriptor that includes all possible fields.

> (c [*BuildReferencesDecorator]()) ClarifyLocator(locator any, factory [build.IFactory](../../../components/build/ifactory)) any
- **locator**: any - component locator to clarify.
- **factory**: [build.IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: any - clarified component descriptor (locator)

#### Create
Creates a component identified by the given locator.

> (c [*BuildReferencesDecorator]()) Create(locator any, factory [build.IFactory](../../../components/build/ifactory)) any
- **locator**: any - locator used to identify the component to be created.
- **factory**: [build.IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: any - created component.

#### Find
Gets all component references that match the specified locator.
Throws a [ReferenceError](../../../components/refer/reference_error) when required is set to True but no references are found.

> (c [*BuildReferencesDecorator]()) Find(locator any, required bool) ([]any, error)
- **locator**: any - locator to find a reference by.
- **required**: bool - it True, it forces to raise an exception when no reference is found.
- **returns**: ([]any, error) - list with matching component references.


#### FindFactory
Finds a factory capable creating a component by given descriptor
from the components registered in the references.

> (c [*BuildReferencesDecorator]()) FindFactory(locator any) [build.IFactory](../../../components/build/ifactory)
- **locator**: any - locator of the component to be created.
- **returns**: [build.IFactory](../../../components/build/ifactory) - found factory or nil if no factory was found.


#### Find
Gets all component references that match the specified locator.
Throws a [ReferenceError](../../../components/refer/reference_error) when required is set to True but no references were found.

> (c [*BuildReferencesDecorator]()) Find(locator any, required bool) ([]any, error)
- **locator**: any - locator to find a reference by.
- **required**: bool - if True, it forces to raise an exception when no reference is found.
- **returns**: ([]any, error) -  list with matching component references.


#### GetOneOptional
Gets an optional component reference that matches the specified locator.

> (c [*BuildReferencesDecorator]()) GetOneOptional(locator any) any
- **locator**: any - locator to find references by.
- **returns**: any - matching component reference or nil if nothing was found.


#### GetOneRequired
Gets a required component reference that matches the specified locator.
Throws a [ReferenceError](../../../components/refer/reference_error) when no references were found.

> (c [*BuildReferencesDecorator]()) GetOneRequired(locator any) (any, error)
- **locator**: any - locator to find a reference by.
- **returns**: (any, error) - matching component reference.


#### GetOptional
Gets all component references that match the specified locator.

> (c [*BuildReferencesDecorator]()) GetOptional(locator any) []any
- **locator**: any - locator to find references by.
- **returns**: []any - list with matching component references or empty list if nothing was found.


#### GetRequired
Gets all component references that match the specified locator.
At least one component reference must be present.
Throws a [ReferenceError](../../../components/refer/reference_error) when no references were found.

> (c [*BuildReferencesDecorator]()) GetRequired(locator any) ([]any, error)
- **locator**: any - locator to find references by.
- **returns**: ([]any, error) - list with matching component references.
