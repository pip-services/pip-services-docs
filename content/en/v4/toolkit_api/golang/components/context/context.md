---
type: docs
title: "Context"
linkTitle: "Context"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: > 
 Basic implementation of an execution context.

  
---

**Implements:** [IContext](../icontext)

### Description
A context to trace execution through a call chain

### Instance Methods  

#### GetTraceId
> GetTraceId(ctx context.Context) string

- **returns**: string - traceId.


#### GetClient
> GetClient(ctx context.Context) string

- **returns**: string - client.

#### GetUser
> GetUser(ctx context.Context) any

- **returns**: any - user.

### See also
- #### [IContext](../icontext)

