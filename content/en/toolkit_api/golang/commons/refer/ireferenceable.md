---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Interface with methods to set references for components that depend on other components. 

    
---

### Description

The IReferenceable interface allows you to set references for components that depend on other components.

Important points

- If component requires explicit notification to unset references, it must also implement the [IUnreferenceable](../iunreferenceable) interface.

### Methods

#### SetReferences
Sets references to dependent components.

> SetReferences(ctx context.Context, references [IReferences](../ireferences))

- **ctx**: context.Context - operation context.
- **references**: [IReferences](../ireferences) - references to locate the component dependencies. 

### Examples

```go
type MyController {
	_persistence IPersistence
}
func (mc* MyController) SetReferences(ctx context.Context, references IReferences) {
	res, descrErr = references.GetOneRequired(
		NewDescriptor("mygroup", "persistence", "*", "*", "1.0")
	)

    if descrErr != nil {
        panic(descrErr)
    }

    mc._persistence = res
}
...

```

### See also
- #### [IReferences](../ireferences)
- #### [IUnreferenceable](../iunreferenceable)
- #### [Referencer](../referencer)
