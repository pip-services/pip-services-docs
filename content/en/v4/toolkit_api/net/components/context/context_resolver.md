---
type: docs
title: "ContextResolver"
linkTitle: "ContextResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
description: > 
 Context resolver that processes context and extracts values from there.

  
---

### Description
TODO: add description



### Static methods  


#### GetTraceId
Gets a trace (correlation) id.

> `public static` string GetTraceId(IContext context)

- **context**: [IContext](../icontext) - execution context to trace execution through call chain.
- **returns**: string - a trace id or <code>null</code> if it is not defined.

#### GetClient
Gets a client name.

> `public static` string GetClient(IContext context)

- **context**: [IContext](../icontext) - execution context to trace execution through call chain.
- **returns**: string - a client name or <code>null</code> if it is not defined.

#### GetUser
Gets a reference to user object.

> `public` string GetUser(IContext context)

- **context**: [IContext](../icontext) - execution context to trace execution through call chain.
- **returns**: string - a user reference or <code>null</code> if it is not defined.


### See also
- #### [IContext](../icontext)

