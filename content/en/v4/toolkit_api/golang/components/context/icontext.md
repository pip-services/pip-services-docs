---
type: docs
title: "IContext"
linkTitle: "IContext"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: > 
 Interface to specify execution context.

  
---

### Description
A context for monitoring the flow of execution through a call chain.

### Instance Methods  

#### Get
Gets a trace (trace) id

> Get(key string) any

- **key**: string - a key of the element to get.
- **returns**: a trace id or empty string if it is not defined.

#### GetClient()
Gets a client's name

> GetClient() string

- **returns**: string - a client name or <code>null</code> if it is not defined.

#### GetUser()
Gets a reference to user object.

> GetUser() string

- **returns**: string - a user reference or empty string if it is not defined.

### See also
- #### [Context](../context)

