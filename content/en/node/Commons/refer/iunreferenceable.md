---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface for components that require explicit clearing of references to dependent components.
---

See also [IReferences](../ireferences), [IReferenceable](../ireferenceable)

**Example:**

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

### Methods

#### unsetReferences
Unsets (clears) previously set references to dependent components. 

> unsetReferences(): void

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)