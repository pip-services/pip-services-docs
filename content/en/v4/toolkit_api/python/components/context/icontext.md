---
type: docs
title: "IContext"
linkTitle: "IContext"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: > 
 Interface to specify execution context.

  
---

### Description
A context for monitoring the flow of execution through a call chain.

### Instance Methods  

#### get
Adds parameters into this ConfigParams under a specified section.
Keys for the new parameters are appended with section dot prefix.

> get(self, key: str) -> Any

- **key**: string - a key of the element to get.
- **returns**: any - the value of the map element.


### See also
- #### [Context](../context)
