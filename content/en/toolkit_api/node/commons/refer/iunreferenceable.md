---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

```typescript
export class MyController implements IReferenceable, IUnreferenceable {
   public _persistence: IMyPersistence;
   ...    
   public setReferences(references: IReferences): void {
       this._persistence = references.getOneRequired<IMyPersistence>(
           new Descriptor("mygroup", "persistence", "*", "*", "1.0")
       );
   }

   public unsetReferences(): void {
       this._persistence = null;
   }
   ...
}

```

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)
