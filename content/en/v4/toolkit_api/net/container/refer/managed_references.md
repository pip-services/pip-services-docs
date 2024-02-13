---
type: docs
title: "ManagedReferences"
linkTitle: "ManagedReferences"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-container-dotnet"
description: >
    Managed references that in addition to keeping and locating references can also 
    manage their lifecycle.

---

**Inherits:** [ReferencesDecorator](../references_decorator), [IOpenable](../../../components/run/iopenable)


### Description

The ManagedReferences class allows you to create managed references that in additon to keeping and locating references can also manage their lifecycle, such as:

- Auto-creation of missing components using available factories
- Auto-linking newly added components
- Auto-opening newly added components
- Auto-closing removed components

### Constructors
Creates a new instance of the decorator.

> `public` ManagedReferences(object[] tuples = null)

- **tuples**: object[] - tuples where odd values are component locators (descriptors) and even values are component references

### Fields

<span class="hide-title-link">

#### _references
References
> `protected` **_references**: [References](../../../components/refer/references)

#### _builder
Builder
> `protected` **_builder**: [BuildReferencesDecorator](../build_references_decorator)

#### _linker
Linker
> `protected` **_linker**: [LinkReferencesDecorator](../link_references_decorator)


#### _runner
Runner
> `protected` **_runner**: [RunReferencesDecorator](../run_references_decorator)

</span>

### Instance methods

#### Close
Closes the component and frees used resources.

> `public` Task CloseAsync(IContext context)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### IsOpen
Checks if the component is open.

> `public` bool IsOpen()
- **returns**: bool - True if the component is open and False otherwise.

#### Open
Opens the component.

> `public` Task OpenAsync(IContext context)
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Static methods

#### FromTuples
Removes all component references that match the specified locator.

> `public static` [ManagedReferences]() FromTyples(params object[] tuples)
- **locator**: object[] - locator to remove references by.
- **returns**: [ManagedReferences]() - list containing all removed references.


### See also
- #### [RunReferencesDecorator](../run_references_decorator)
- #### [LinkReferencesDecorator](../link_references_decorator)
- #### [BuildReferencesDecorator](../build_references_decorator)
- #### [References](../../../components/refer/references)

