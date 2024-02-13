---
type: docs
title: "Refer"
linkTitle: "Refer"
no_list: true
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    
    The Refer package provides a set of classes and interfaces that allows you to create, manage and resolve component dependencies that can be passed to other components to establish relationships between them. 
   
---
---

<div class="module-body"> 

### Interfaces

#### [IReferenceable](ireferenceable)
Sets references to dependent components.

#### [IReferences](ireferences)
Interface for a map that holds component references and passes them to components
to establish dependencies with each other.
Together with the [IReferenceable](ireferenceable) and [IUnreferenceable](iunreferenceable) interfaces, it implements
a Locator pattern that is used by the PipServices toolkit for Inversion of Control
to assign external dependencies to components. 

#### [IUnreferenceable](iunreferenceable)
Interface for components that require explicit clearing of references to dependent components.

<br>

### Classes

#### [DependencyResolver](dependency_resolver)
Helper class for resolving component dependencies.
The resolver is configured to resolve named dependencies by a specified locator.
During deployment the dependency locator can be changed.

#### [Descriptor](descriptor)
Locator type that is most often used in the PipServices toolkit.
It locates components using several fields:
- Group: package or named group of components like "pip-services"
- Type: logical component type that defines it's contract. like "persistence"
- Kind: physical implementation type, like "mongodb".
- Name: unique component name, like "default"
- Version: version of the component contract like "1.0"

#### [Reference](reference)
Contains a reference to a component and locator to find it.
It is used by [References](references) to store registered component references.

#### [ReferenceException](reference_exception)
Error when required component dependency cannot be found.

#### [Referencer](referencer)
Helper class that sets and unsets references to components.

#### [References](references)
The most basic implementation of [IReferences](ireferences) to store and locate component references.

</div>
