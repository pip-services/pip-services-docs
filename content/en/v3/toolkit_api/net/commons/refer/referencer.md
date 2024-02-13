---
type: docs
title: "Referencer"
linkTitle: "Referencer"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that allows you to set and unset references to components.
---

### Description

The Referencer class allows you to set and unset references to components.

### Static methods

#### SetReferences
Sets references to multiple components.

To set references, components must implement the [IReferenceable](../ireferenceable) interface.
If they don't, the call to this method has no effect.

> `public static` void SetReferences([IReferenceable](../ireferenceable) references, IEnumerable components = null)

- **references**: [IReferences](../ireferences) - references to be set.
- **component**: IEnumerable - list of components to set the references to.

#### SetReferencesForOne
Sets references to a specific component.

To set references, components must implement the [IReferenceable](../ireferenceable) interface.
If they don't, the call to this method has no effect.

> `public static` void SetReferencesForOne([IReferences](../ireferences) references, object component)

- **references**: [IReferences](../ireferences) - references to be set.
- **component**: object - component to set references to.

#### UnsetReferences
Unsets references in multiple components.
To unset references, components must implement the [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.

> `public static` void UnsetReferences(IEnumerable components) 

- **components**: IEnumerable - list of components whose references must be cleared.

#### UnsetReferences
Unsets references in multiple components.
To unset references, components must implement the [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.

> `public static` void UnsetReferences(IReferences components) 

- **components**: IReferences - list of components whose references must be cleared.

#### UnsetReferencesForOne
Unsets references in a specific component.

To unset references, components must implement the [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.

> `public static` void UnsetReferencesForOne(object component) 

- **component**: object - component to unset references.


### See also
- #### [IReferenceable](../ireferenceable)
- #### [IUnreferenceable](../iunreferenceable)
