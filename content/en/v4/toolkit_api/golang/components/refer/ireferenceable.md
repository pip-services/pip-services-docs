---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Interface with methods used to set references for components that depend on other components. 

    
---

### Description

The IReferenceable interface allows you to set references for components that depend on other components.

Important points

- If a component requires explicit notification to unset references, it must also implement the [IUnreferenceable](../iunreferenceable) interface.

### Instance methods

#### setReferences
Sets references to dependent components.

> setReferences(references: [IReferences](../ireferences)): void

- **references**: [IReferences](../ireferences) - references to locate the component's dependencies. 

### Examples

```go
type MyController {
			_persistence IPersistence
		}
		func (mc* MyController) SetReferences(ctx context.Context, references IReferences) {
			mc._persistence = references.GetOneRequired(
				NewDescriptor("mygroup", "persistence", "*", "*", "1.0"))
			);
		}
```

### See also
- #### [IReferences](../ireferences)
- #### [IUnreferenceable](../iunreferenceable)
- #### [Referencer](../referencer)

