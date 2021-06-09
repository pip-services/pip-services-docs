---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Interface with methods to set refernces for components that depend on other components. 

    
---

### Description

The IReferenceable interface allows you to set references for components that depend on other components.

Important points

- If component requires explicit notification to unset references, it must also implement the [IUnreferenceable](../iunreferenceable) interface.

### Methods

#### SetReferences
Sets references to dependent components.

> SetReferences(references [IReferences](../ireferences))

- **references**: [IReferences](../ireferences) - references to locate the component dependencies. 

### Examples

```go
type MyController {
	_persistence IPersistence
}
 
func (mc* MyController) setReferences(references IReferences) {
    mc._persistence = references.getOneRequired(
        NewDescriptor("mygroup", "persistence", "*", "*", "1.0"))
    );
}
...

```

### See also
- #### [IReferences](../ireferences)
- #### [IUnreferenceable](../iunreferenceable)
- #### [Referencer](../referencer)
