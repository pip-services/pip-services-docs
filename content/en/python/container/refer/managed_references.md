---
type: docs
title: "ManagedReferences"
linkTitle: "ManagedReferences"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Managed references that in addition to keeping and locating references can also 
    manage their lifecycle:

    - Auto-creation of missing component using available factories

    - Auto-linking newly added components

    - Auto-opening newly added components

    - Auto-closing removed components
---

**Implements:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../commons/run/iopenable)

See also [RunReferencesDecorator](../run_references_decorator), [LinkReferencesDecorator](../link_references_decorator),
[BuildReferencesDecorator](../build_references_decorator), [References](../../../commons/refer/references)

### Constructors
Creates a new instance of the decorator.

> ManagedReferences(tuples: Sequence[Any] = None)

- **tuples**: Sequence[Any] - tuples where odd values are component locators (descriptors) and even values are component references

### Methods

#### close
Closes component and frees used resources.

> close(correlation_id: str)
- **correlation_id**: str - (optional) transaction id to trace execution through call chain.

#### is_open
Checks if the component is opened.

> is_open(): bool
- **returns**: bool - true if the component has been opened and false otherwise.

#### open
Opens the component.

> open(correlation_id: str)
- **correlation_id**: str - (optional) transaction id to trace execution through call chain.

#### from_tuples
Removes all component references that match the specified locator.

> from_tuples(*tuples: Any): [ManagedReferences]()
- **locator**: Any - the locator to remove references by.
- **returns**: [ManagedReferences]() - a list, containing all removed references.


### See also
- #### [RunReferencesDecorator](../run_references_decorator)
- #### [LinkReferencesDecorator](../link_references_decorator)
- #### [BuildReferencesDecorator](../build_references_decorator)
- #### [References](../../../commons/refer/references)