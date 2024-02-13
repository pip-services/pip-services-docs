---
type: docs
title: "Run"
linkTitle: "Run"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
description: >
    
    The Run package contains a set of interfaces and classes for the standard lifecycle of objects (opened, 
    closed, openable, closable, runnable). In addition, it has several helper classes for lifecycle management.  
---
---

<div class="module-body"> 

### Interfaces

#### [ICleanable](icleanable)
Interface for components that should clean their states.
Cleaning state most often is used during testing. 
But there may be situations when it can be done in production.

#### [IClosable](iclosable)
Interface for components that require explicit closure.
For components that require opening as well as closing,  
use [IOpenable](iopenable) interface instead.

#### [IOpenable](iopenable)
Interface for components that require explicit opening and closing.
For components that perform opening on demand consider using the 
[IClosable](iclosable) interface instead.

<br>

### Classes

#### [Cleaner](cleaner)
Helper class that cleans a stored object's state.

#### [Closer](closer)
Helper class that closes previously opened components.

#### [Opener](opener)
Helper class that opens components.


</div>

