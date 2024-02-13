---
type: docs
title: "IReferenceable"
linkTitle: "IReferenceable"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Interface with methods to set refernces for components that depend on other components. 

    
---

### Description

The IReferenceable interface allows you to set references for components that depend on other components.

**Important points**

- If a component requires explicit notification to unset references, it must also implement the [IUnreferenceable](../iunreferenceable) interface.


### Instance methods

#### SetReferences
Sets references to dependent components.

> void SetReferences([IReferences](../ireferences) references)

- **references**: [IReferences](../ireferences) - references to locate the component dependencies. 

### Examples

```cs
public class MyController: IReferenceable 
{
    public IMyPersistence _persistence;
    ...    
    public void SetReferences(IReferences references)
    {
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
