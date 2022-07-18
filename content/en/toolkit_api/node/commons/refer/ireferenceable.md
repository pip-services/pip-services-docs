---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

### See also
- #### [IReferences](../ireferences)
- #### [IUnreferenceable](../iunreferenceable)
- #### [Referencer](../referencer)
