---
type: docs
title: "ManagedReferences"
linkTitle: "ManagedReferences"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-container-java"
description: >
    Managed references that in addition to keeping and locating references can also 
    manage their lifecycle.

---

**Extends:** [ReferencesDecorator](../references_decorator)

**Implements:** [IOpenable](../../../components/run/iopenable)

### Description

The ManagedReferences class allows you to create managed references that in additon to keeping and locating references can also manage their lifecycle, such as:

- Auto-creation of missing components using available factories
- Auto-linking newly added components
- Auto-opening newly added components
- Auto-closing removed components

### Constructors
Creates a new instance of the decorator.

> `public` ManagedReferences(Object[] tuples)

- **tuples**: Object[] - tuples where odd values are component locators (descriptors) and even values are component references

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

#### close
Closes the component and frees used resources.

> `public` void close([IContext](../../../components/context/icontext) context) throws ApplicationException
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

#### isOpen
Checks if the component is open.

> `public` boolean isOpen()
- **returns**: boolean - True if the component is open and False otherwise.

#### open
Opens the component.

> `public` void open([IContext](../../../components/context/icontext) context) throws ApplicationException
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.

### Static methods

#### fromTuples
Removes all component references that match the specified locator.

> `public static` [ManagedReferences]() fromTuples(Object... tuples) throws ReferenceException
- **tuples**: Object... - locator to remove references by.
- **returns**: [ManagedReferences]() - list containing all removed references.


### See also
- #### [RunReferencesDecorator](../run_references_decorator)
- #### [LinkReferencesDecorator](../link_references_decorator)
- #### [BuildReferencesDecorator](../build_references_decorator)
- #### [References](../../../components/refer/references)
