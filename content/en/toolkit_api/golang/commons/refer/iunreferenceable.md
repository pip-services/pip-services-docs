---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Interface for components that require the capacity to clear previously defined references to dependent components.
---

### Description

The IUnreferenceable interface can be used for components that require the capacity to clear previously defined references to dependent components.

### Methods

#### UnsetReferences
Unsets (clears) previously set references to dependent components. 

> UnsetReferences(ctx context.Context)

- **ctx**: context.Context - operation context.

### Examples

```go
type MyController  {
	_persistence IMyPersistence;
}
func (mc* MyController) SetReferences(ctx context.Context, references *IReferences) {
	res, descrErr := references.GetOneRequired(
		NewDescriptor("mygroup", "persistence", "*", "*", "1.0"),
	)

    if descrErr != nil {
        panic(descrErr)
    }

    mc._persistence = res
}

func (mc* MyController) UnsetReferences(ctx context.Context) {
	mc._persistence = nil;
}

```

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)
