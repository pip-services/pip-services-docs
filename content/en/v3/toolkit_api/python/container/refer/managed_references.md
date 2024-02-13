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

- Auto-creation of missing components using available factories
- Auto-linking newly added components
- Auto-opening newly added components
- Auto-closing removed components

### Constructors
Creates a new instance of the decorator.

> ManagedReferences(tuples: Sequence[Any] = None)

- **tuples**: Sequence[Any] - tuples where odd values are component locators (descriptors) and even values are component references

### Fields

<span class="hide-title-link">

#### _references
References
> **_references**: [References](../../../commons/refer/references)

#### _builder
Builder
> **_builder**: [BuildReferencesDecorator](../build_references_decorator)

#### _linker
Linker
> **_linker**: [LinkReferencesDecorator](../link_references_decorator)


#### _runner
Runner
> **_runner**: [RunReferencesDecorator](../run_references_decorator)

</span>

### Instance methods

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

### Static methods

#### from_tuples
Removes all component references that match the specified locator.

> `static` from_tuples(*tuples: Any): [ManagedReferences]()
- **locator**: Any - locator to remove references by.
- **returns**: [ManagedReferences]() - list containing all removed references.


### See also
- #### [RunReferencesDecorator](../run_references_decorator)
- #### [LinkReferencesDecorator](../link_references_decorator)
- #### [BuildReferencesDecorator](../build_references_decorator)
- #### [References](../../../commons/refer/references)
