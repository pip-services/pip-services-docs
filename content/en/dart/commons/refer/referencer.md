---
type: docs
title: "Referencer"
linkTitle: "Referencer"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class that allows you to set and unset references to components.
---

### Description

The Referencer class allows you to set and unset references to components.

### Static methods

#### setReferences
Sets references to multiple components.

To set references, components must implement the [IReferenceable](../ireferenceable) interface.
If they don't, the call to this method has no effect.

> `static` void setReferences([IReferences](../ireferences) references, List components)

- **references**: [IReferences](../ireferences) - references to be set.
- **component**: List - list of components to set the references to.

#### setReferencesForOne
Sets references to specific component.

To set references, components must implement the [IReferenceable](../ireferenceable) interface.
If they don't, the call to this method has no effect.

> `static` void setReferencesForOne([IReferences](../ireferences) references, component)

- **references**: [IReferences](../ireferences) - references to be set.
- **component**: dynamic - component to set references to.

#### unsetReferences
Unsets references in multiple components.
To unset references, components must implement the [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.

> `static` void unsetReferences(List components)

- **components**: List - list of components, whose references must be cleared.

#### unsetReferencesForOne
Unsets references in a specific component.

To unset references, components must implement the [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.

> `static` void unsetReferencesForOne(component)

- **component**: dynamic - component to unset references.


### See also
- #### [IReferenceable](../ireferenceable)
- #### [IUnreferenceable](../iunreferenceable)
