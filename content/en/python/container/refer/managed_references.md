---
type: docs
title: "ManagedReferences"
linkTitle: "ManagedReferences"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Managed references that in addition to keeping and locating references can also 
    manage their lifecycle.

---

**Implements:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../commons/run/iopenable)

### Description

The ManagedReferences class allows you to create managed references that in additon to keeping and locating references can also manage their lifecycle, such as:

- Auto-creation of missing component using available factories
- Auto-linking newly added components
- Auto-opening newly added components
- Auto-closing removed components

### Constructors
Creates a new instance of the decorator.

> ManagedReferences(tuples: Sequence[Any] = None)

- **tuples**: Sequence[Any] - tuples where odd values are component locators (descriptors) and even values are component references

### Methods

#### close
Closes the component and frees used resources.

> close(correlation_id: Optional[str])
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### is_open
Checks if the component is open.

> is_open(): bool
- **returns**: bool - True if the component is open and False otherwise.

#### open
Opens the component.

> open(correlation_id: Optional[str])
- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.

#### from_tuples
Removes all component references that match the specified locator.

> from_tuples(*tuples: Any): [ManagedReferences]()
- **locator**: Any - locator to remove references by.
- **returns**: [ManagedReferences]() - a list, containing all removed references.


### See also
- #### [RunReferencesDecorator](../run_references_decorator)
- #### [LinkReferencesDecorator](../link_references_decorator)
- #### [BuildReferencesDecorator](../build_references_decorator)
- #### [References](../../../commons/refer/references)
