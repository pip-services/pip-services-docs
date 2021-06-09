---
type: docs
title: "Referencer"
linkTitle: "Referencer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that allows you to set and unset references to components.
---

### Description

The Referencer class allows you to set and unset references to components.

### Static methods

#### set_references
Sets references to multiple components.

To set references components must implement [IReferenceable](../ireferenceable) interface.
If they don't, the call to this method has no effect.

> `static` set_references(references: [IReferenceable](../ireferenceable), components: List[Any])

- **references**: [IReferences](../ireferences) - the references to be set.
- **component**: List[Any] - a list of components to set the references to.

#### set_references_for_one
Sets references to specific component.

To set references components must implement [IReferenceable](../ireferenceable) interface.
If they don't, the call to this method has no effect.

> `static` set_references_for_one(references: [IReferences](../ireferences), component: Any)

- **references**: [IReferences](../ireferences) - the references to be set.
- **component**: Any - the component to set references to.

#### unset_references
Unsets references in multiple components.
To unset references components must implement [IUnreferenceable](../iunreferenceable) interface.
If they don't the call to this method has no effect.

> `static` unset_references(components: List[Any])

- **components**: List[Any] - the list of components, whose references must be cleared.

#### unset_references_for_one
Unsets references in specific component.

To unset references components must implement [IUnreferenceable](../iunreferenceable) interface.
If they don't, the call to this method has no effect.  
See [IUnreferenceable](../iunreferenceable)

> `static` unset_references_for_one(component: Any) 

- **component**: Any - the component to unset references.


### See also
- #### [IReferenceable](../ireferenceable)
- #### [IUnreferenceable](../iunreferenceable)
