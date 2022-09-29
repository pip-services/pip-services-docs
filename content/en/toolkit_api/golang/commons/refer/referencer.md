---
type: docs
title: "Referencer"
linkTitle: "Referencer"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
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

> SetReferences(ctx context.Context, references [IReferences](../ireferences), components []any)

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../ireferences) - references to be set.
- **component**: []any - list of components to set the references to.

#### SetReferencesForOne
Sets references to specific component.

To set references components must implement [IReferenceable](../ireferenceable) interface.
If they don't the call to this method has no effect.

> SetReferencesForOne(ctx context.Context, references [IReferences](../ireferences), component any)

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../ireferences) - references to be set.
- **component**: any - component to set references to.

#### UnsetReferences
Unsets references in multiple components.
To unset references components must implement [IUnreferenceable](../iunreferenceable) interface.
If they don't the call to this method has no effect.

> UnsetReferences(ctx context.Context, components []any)

- **ctx**: context.Context - operation context.
- **components**: []any - list of components, whose references must be cleared.

#### UnsetReferencesForOne
Unsets references in specific component.

To unset references components must implement [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.

> UnsetReferencesForOne(ctx context.Context, component any)

- **ctx**: context.Context - operation context.
- **component**: any - component to unset references.


### See also
- #### [IReferenceable](../ireferenceable)
- #### [IUnreferenceable](../iunreferenceable)
