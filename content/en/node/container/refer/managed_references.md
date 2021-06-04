---
type: docs
title: "ManagedReferences"
linkTitle: "ManagedReferences"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-container-nodex"
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

> `public` constructor(tuples: any[] = null)

- **tuples**: any[] - tuples where odd values are component locators (descriptors) and even values are component references

### Instance methods

#### close
Closes the component and frees used resources.

> `public` close(correlationId: string): Promise\<void\>
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

#### is_open
Checks if the component is open.

> is_open(): bool
- **returns**: bool - True if the component is open and False otherwise.

#### open
Opens the component.

> `public` open(correlationId: string): Promise\<void\>
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.

### Static methods

#### fromTuples
Removes all component references that match the specified locator.

> `public static` fromTuples(...tuples: any[]): [ManagedReferences]()
- **locator**: any[] - locator to remove references by.
- **returns**: [ManagedReferences]() - list containing all removed references.


### See also
- #### [RunReferencesDecorator](../run_references_decorator)
- #### [LinkReferencesDecorator](../link_references_decorator)
- #### [BuildReferencesDecorator](../build_references_decorator)
- #### [References](../../../commons/refer/references)
