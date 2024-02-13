---
type: docs
title: "ContextResolver"
linkTitle: "ContextResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: > 
 Context resolver that processes context and extracts values from there.

  
---

### Description
TODO: add description



### Static methods  


#### getTraceId
Gets a trace (correlation) id.

> `public static` getTraceId(context: [IContext](../icontext)): string

- **context**: [IContext](../icontext) - execution context to trace execution through call chain.
- **returns**: string - a trace id or <code>null</code> if it is not defined.

#### getClient
Gets a client name.

> `public static` getClient(context: [IContext](../icontext)): string

- **context**: [IContext](../icontext) - execution context to trace execution through call chain.
- **returns**: string - a client name or <code>null</code> if it is not defined.

#### getUser
Gets a reference to user object.

> `public` getUser(context: [IContext](../icontext)): string

- **context**: [IContext](../icontext) - execution context to trace execution through call chain.
- **returns**: string - a user reference or <code>null</code> if it is not defined.


### See also
- #### [IContext](../icontext)
