---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Interface for components that require the capacity to clear previously defined references to dependent components.
---

### Description

The IUnreferenceable interface can be used for components that require the capacity to clear previously defined references to dependent components.

### Instance methods

#### unsetReferences
Unsets (clears) previously set references to dependent components. 

> unsetReferences(): void

### Examples

```go
type MyController  {
			_persistence IMyPersistence;
		}
		func (mc* MyController) SetReferences(ctx context.Context, references *IReferences) {
			mc._persistence = references.GetOneRequired(
				NewDescriptor("mygroup", "persistence", "*", "*", "1.0"),
			);
		}

		func (mc* MyController) UnsetReferences(ctx context.Context) {
			mc._persistence = nil;
		}
```

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)

