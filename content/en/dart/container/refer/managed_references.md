---
type: docs
title: "ManagedReferences"
linkTitle: "ManagedReferences"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-container-dart"
description: >
    Managed references that in addition to keeping and locating references can also 
    manage their lifecycle.

---

**Extends:** [ReferencesDecorator](../references_decorator)

**Implements:** [IOpenable](../../../commons/run/iopenable)

### Description

The ManagedReferences class allows you to create managed references that in additon to keeping and locating references can also manage their lifecycle, such as:

- Auto-creation of missing components using available factories
- Auto-linking newly added components
- Auto-opening newly added components
- Auto-closing removed components

### Constructors
Creates a new instance of the decorator.

> ManagedReferences(List tuples)

- **tuples**: List - tuples where odd values are component locators (descriptors) and even values are component references

### Fields

<span class="hide-title-link">

#### references
TODO: add description
> **references**: [References](../../../commons/refer/references)

#### builder
TODO: add description
> **builder**: [BuildReferencesDecorator](../build_references_decorator)

#### linker
TODO: add description
> **linker**: [LinkReferencesDecorator](../link_references_decorator)


#### runner
TODO: add description
> **runner**: [RunReferencesDecorator](../run_references_decorator)

</span>

### Instance methods

#### close
Closes the component and frees used resources.

`@override`
> Future close(String correlationId)
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

#### isOpen
Checks if the component is open.

`@override`
> bool isOpen()
- **returns**: bool - True if the component is open and False otherwise.

#### open
Opens the component.

`@override`
> Future open(String correlationId)
- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.

### Static methods

#### fromTuples
Removes all component references that match the specified locator.

> `static` [ManagedReferences]() fromTuples(List tuples)
- **locator**: List - locator to remove references by.
- **returns**: [ManagedReferences]() - list containing all removed references.


### See also
- #### [RunReferencesDecorator](../run_references_decorator)
- #### [LinkReferencesDecorator](../link_references_decorator)
- #### [BuildReferencesDecorator](../build_references_decorator)
- #### [References](../../../commons/refer/references)
