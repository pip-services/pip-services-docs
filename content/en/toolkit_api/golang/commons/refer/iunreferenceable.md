---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Interface for components that require the capacity to clear previously defined references to dependent components.
---

### Description

The IUnreferenceable interface can be used for components that require the capacity to clear previously defined references to dependent components.

### Methods

#### UnsetReferences
Unsets (clears) previously set references to dependent components. 

> UnsetReferences()

### Examples

```go
type MyController  {
    _persistence IMyPersistence;
}
func (mc* MyController) SetReferences(references *IReferences) {
    mc._persistence = references.GetOneRequired(
        NewDescriptor("mygroup", "persistence", "*", "*", "1.0")
    );
}

func (mc* MyController) UnsetReferences() {
    mc._persistence = nil;
}

```

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)
