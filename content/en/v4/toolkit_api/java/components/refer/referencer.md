---
type: docs
title: "Referencer"
linkTitle: "Referencer"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
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

> `public static` void setReferences([IReferences](../ireferences) references, Iterable<Object> components) throws ReferenceException, ConfigException

- **references**: [IReferences](../ireferences) - references to be set.
- **component**: Iterable<Object> - list of components to set the references to.

#### setReferencesForOne
Sets references to specific component.

To set references, components must implement the [IReferenceable](../ireferenceable) interface.
If they don't, the call to this method has no effect.

> `public static` void setReferencesForOne([IReferences](../ireferences) references, Object component) throws ReferenceException, ConfigException

- **references**: [IReferences](../ireferences) - references to be set.
- **component**: Object - component to set references to.

#### unsetReferences
Unsets references in multiple components.
To unset references, components must implement the [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.

> `public static` void unsetReferences(Iterable<Object> components)

- **components**: Iterable<Object> - list of components, whose references must be cleared.

#### unsetReferencesForOne
Unsets references in a specific component.

To unset references, components must implement the [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.

> `public static` void unsetReferencesForOne(Object component) 

- **component**: Object - component to unset references.


### See also
- #### [IReferenceable](../ireferenceable)
- #### [IUnreferenceable](../iunreferenceable)
