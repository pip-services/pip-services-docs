---
type: docs
title: "IUnreferenceable"
linkTitle: "IUnreferenceable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Interface for components that require the capacity to clear previously defined references to dependent components.
---

### Description

The IUnreferenceable interface can be used for components that require the capacity to clear previously defined references to dependent components.

### Instance methods

#### UnsetReferences
Unsets (clears) previously set references to dependent components. 

> void UnsetReferences()

### Examples

```cs
public class MyController: IReferenceable, IUnreferenceable 
{
    public IMyPersistence _persistence;
    ...    
    public void SetReferences(IReferences references)
    {
        this._persistence = references.getOneRequired<IMyPersistence>(
        new Descriptor("mygroup", "persistence", "*", "*", "1.0") );
    }
    public void UnsetReferences()
    {
        this._persistence = null;
    }
    ...
}

```

### See also
- #### [IReferences](../ireferences)
- #### [IReferenceable](../ireferenceable)
