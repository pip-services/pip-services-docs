---
type: docs
title: "ManagedReferences"
linkTitle: "ManagedReferences"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-container-gox"
description: >
    Managed references that in addition to keeping and locating references can also 
    manage their lifecycle.

---

**Implements:** [ReferencesDecorator](../references_decorator)

### Description

The ManagedReferences class allows you to create managed references that in additon to keeping and locating references can also manage their lifecycle, such as:

- Auto-creation of missing components using available factories
- Auto-linking newly added components
- Auto-opening newly added components
- Auto-closing removed components

### Constructors

#### NewManagedReferences
Creates a new instance of the decorator.

> NewManagedReferences(ctx context.Context, tuples []any) [*ManagedReferences]()

- **ctx**: context.Context - operation context.
- **tuples**: []any - tuples where odd values are component locators (descriptors) and even values are component references

#### NewEmptyManagedReferences
Creates a new instance of the references

> NewEmptyManagedReferences() [*ManagedReferences]()


#### NewEmptyManagedReferences
Creates a new instance of the references

> NewEmptyManagedReferences() [*ManagedReferences]()

#### NewManagedReferencesFromTuples
Removes all component references that match the specified locator.

> NewManagedReferencesFromTuples(ctx context.Context, tuples ...any) [*ManagedReferences]()

- **ctx**: context.Context - operation cotext.
- **locator**: ...any - locator to remove references by.
- **returns**: [ManagedReferences]() - list containing all removed references.


### Methods

#### Close
Closes the component and frees used resources.

> (c [*ManagedReferences]()) Close(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation cotext.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **retunrs**: error - returns error if not closed

#### IsOpen
Checks if the component is open.

> (c [*ManagedReferences]()) IsOpen() bool
- **returns**: bool - True if the component is open and False otherwise.

#### Open
Opens the component.

> (c [*ManagedReferences]()) Open(ctx context.Context, context [IContext](../../../components/context/icontext)) error

- **ctx**: context.Context - operation cotext.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: error - return error if not opened


### See also
- #### [RunReferencesDecorator](../run_references_decorator)
- #### [LinkReferencesDecorator](../link_references_decorator)
- #### [BuildReferencesDecorator](../build_references_decorator)
- #### [References](../../../components/refer/references)

