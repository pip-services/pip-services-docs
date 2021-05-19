---
type: docs
title: "Referencer"
linkTitle: "Referencer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class that allows you to set and unset references to components.
---

### Description

The Referencer class allows you to set and unset references to components.

### Static methods

#### setReferences
Sets references to multiple components.

To set references components must implement [IReferenceable](../ireferenceable) interface.
If they don't the call to this method has no effect.

> `public static` setReferences(references: [IReferenceable](../ireferenceable), components: any[]): void

- **references**: [IReferences](../ireferences) - the references to be set.
- **component**: any[] - a list of components to set the references to.

#### setReferencesForOne
Sets references to specific component.

To set references components must implement [IReferenceable](../ireferenceable) interface.
If they don't the call to this method has no effect.

> `public static` setReferencesForOne(references: [IReferences](../ireferences), component: any): void

- **references**: [IReferences](../ireferences) - the references to be set.
- **component**: any - the component to set references to.

#### unsetReferences
Unsets references in multiple components.
To unset references components must implement [IUnreferenceable](../iunreferenceable) interface.
If they don't the call to this method has no effect.

> `public static` unsetReferences(components: any[]): void

- **components**: any[] - the list of components, whose references must be cleared.

#### unsetReferencesForOne
Unsets references in specific component.

To unset references components must implement [IUnreferenceable](../iunreferenceable) interface.
If they don't the call to this method has no effect.

> `public static` unsetReferencesForOne(component: any): void 

- **component**: any - the component to unset references.

#### unsetReferencesForOne
Unsets references in specific component.

To unset references components must implement [IUnreferenceable](../iunreferenceable) interface.
If they don't the call to this method has no effect.
See [IUnreferenceable](../iunreferenceable)

> `public static` unsetReferencesForOne(component: any): void

- **component**: any - the component to unset references.

### See also
- #### [IReferenceable](../ireferenceable)
- #### [IUnreferenceable](../iunreferenceable)
