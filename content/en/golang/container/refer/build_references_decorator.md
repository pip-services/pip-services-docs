---
type: docs
title: "BuildReferencesDecorator"
linkTitle: "BuildReferencesDecorator"
gitUrl: "https://github.com/pip-services3-go/pip-services3-container-go"
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

> NewBuildReferencesDecorator(nextReferences [IReferences](../../../commons/refer/ireferences), topReferences [IReferences](../../../commons/refer/ireferences)) [*BuildReferencesDecorator]()

- **nextReferences**: [IReferences](../../../commons/refer/ireferences) - the next references or decorator in the chain.
- **topReferences**: [IReferences](../../../commons/refer/ireferences) - the decorator at the top of the chain.


### Methods

#### ClarifyLocator
Clarifies a component locator by merging two descriptors into one to replace missing fields.
That allows to get a more complete descriptor that includes all possible fields.

> (c [*BuildReferencesDecorator]()) ClarifyLocator(locator interface{}, factory [build.IFactory](../../../components/build/ifactory)) interface{}
- **locator**: interface{} - component locator to clarify.
- **factory**: [build.IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: interface{} - clarified component descriptor (locator)

#### Create
Creates a component identified by the given locator.

> (c [*BuildReferencesDecorator]()) Create(locator interface{}, factory [build.IFactory](../../../components/build/ifactory)) interface{}
- **locator**: interface{} - locator used to identify the component to be created.
- **factory**: [build.IFactory](../../../components/build/ifactory) - factory that shall create the component.
- **returns**: interface{} - created component.

#### Find
Gets all component references that match the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to True but no references are found.

> (c [*BuildReferencesDecorator]()) Find(locator interface{}, required bool) ([]interface{}, error)
- **locator**: interface{} - locator to find a reference by.
- **required**: bool - it True, it forces to raise an exception when no reference is found.
- **returns**: ([]interface{}, error) - list with matching component references.


#### FindFactory
Finds a factory capable creating a component by given descriptor
from the components registered in the references.

> (c [*BuildReferencesDecorator]()) FindFactory(locator interface{}) [build.IFactory](../../../components/build/ifactory)
- **locator**: interface{} - locator of the component to be created.
- **returns**: [build.IFactory](../../../components/build/ifactory) - found factory or nil if no factory was found.


#### Find
Gets all component references that match the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when required is set to True but no references were found.

> (c [*BuildReferencesDecorator]()) Find(locator interface{}, required bool) ([]interface{}, error)
- **locator**: interface{} - locator to find a reference by.
- **required**: bool - if True, it forces to raise an exception when no reference is found.
- **returns**: ([]interface{}, error) -  list with matching component references.


#### GetOneOptional
Gets an optional component reference that matches the specified locator.

> (c [*BuildReferencesDecorator]()) GetOneOptional(locator interface{}) interface{}
- **locator**: interface{} - locator to find references by.
- **returns**: interface{} - matching component reference or nil if nothing was found.


#### GetOneRequired
Gets a required component reference that matches the specified locator.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references were found.

> (c [*BuildReferencesDecorator]()) GetOneRequired(locator interface{}) (interface{}, error)
- **locator**: interface{} - locator to find a reference by.
- **returns**: (interface{}, error) - matching component reference.


#### GetOptional
Gets all component references that match the specified locator.

> (c [*BuildReferencesDecorator]()) GetOptional(locator interface{}) []interface{}
- **locator**: interface{} - locator to find references by.
- **returns**: []interface{} - list with matching component references or empty list if nothing was found.


#### GetRequired
Gets all component references that match the specified locator.
At least one component reference must be present.
Throws a [ReferenceException](../../../commons/refer/reference_exception) when no references were found.

> (c [*BuildReferencesDecorator]()) GetRequired(locator interface{}) ([]interface{}, error)
- **locator**: interface{} - locator to find references by.
- **returns**: ([]interface{}, error) - list with matching component references.