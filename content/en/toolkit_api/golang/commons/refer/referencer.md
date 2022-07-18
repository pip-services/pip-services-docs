---
type: docs
title: "Referencer"
linkTitle: "Referencer"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Helper class that allows you to set and unset references to components.
---

### Description

The Referencer class allows you to set and unset references to components.

### Methods

#### SetReferences
Sets references to multiple components.

To set references components must implement [IReferenceable](../ireferenceable) interface.
If they don't the call to this method has no effect.

> (c *TReferencer) SetReferences(references [IReferences](../ireferences), components []interface{})

- **references**: [IReferences](../ireferences) - references to be set.
- **component**: []interface{} - list of components to set the references to.

#### SetReferencesForOne
Sets references to specific component.

To set references components must implement [IReferenceable](../ireferenceable) interface.
If they don't the call to this method has no effect.

> (c *TReferencer) SetReferencesForOne(references [IReferences](../ireferences), component interface{})

- **references**: [IReferences](../ireferences) - references to be set.
- **component**: interface{} - component to set references to.

#### UnsetReferences
Unsets references in multiple components.
To unset references components must implement [IUnreferenceable](../iunreferenceable) interface.
If they don't the call to this method has no effect.

> (c *TReferencer) UnsetReferences(components []interface{})

- **components**: []interface{} - list of components, whose references must be cleared.

#### UnsetReferencesForOne
Unsets references in specific component.

To unset references components must implement [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.

> (c *TReferencer) UnsetReferencesForOne(component interface{})

- **component**: interface{} - component to unset references.


### See also
- #### [IReferenceable](../ireferenceable)
- #### [IUnreferenceable](../iunreferenceable)
