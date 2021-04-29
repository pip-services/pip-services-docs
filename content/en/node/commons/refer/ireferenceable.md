---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface for components that depends on other components. 

    If component requires explicit notification to unset references
    it shall additionally implement [IUnreferenceable](../iunreferenceable) interface.
---

See also [IReferences](../ireferences), [IUnreferenceable](../iunreferenceable), [Referencer](../referencer)

**Example:**

```typescript
export class MyController implements IReferenceable {
    public _persistence: IMyPersistence;
    ...    
    public setReferences(references: IReferences): void {
        this._persistence = references.getOneRequired<IMyPersistence>(
            new Descriptor("mygroup", "persistence", "*", "*", "1.0")
        );
    }
    ...
}

```

### Methods

#### setReferences
Sets references to dependent components.

> setReferences(references: [IReferences](../ireferences)): void

- **references**: [IReferences](../ireferences) - references to locate the component dependencies. 



### See also
- #### [IReferences](../ireferences)
- #### [IUnreferenceable](../iunreferenceable)
- #### [Referencer](../referencer)