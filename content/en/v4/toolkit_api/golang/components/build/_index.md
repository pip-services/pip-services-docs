---
type: docs
title: "Build"
linkTitle: "Build"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-commons-go"
description: >
    
    The Build package contains interfaces and classes used to implement the "factory design pattern". 
    
---
---

<div class="module-body"> 

### Interfaces

#### [IFactory](ifactory)
Interface for component factories.

<br>

### Types

#### [CompositeFactory](composite_factory)
Aggregates multiple factories into a single factory component.

#### [CreateError](create_error)
Error raised when factory is not able to create the requested component.

#### [Factory](factory)
Basic component factory that creates components using registered types and factory functions.

</div>

