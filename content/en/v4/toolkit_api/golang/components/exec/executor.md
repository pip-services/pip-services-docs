---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: >
    Helper class that allows you to execute one or more components.
---

### Description

The Executor class allows you to execute one or more components.


### Static methods

#### execute
Executes multiple components.

To be executed, components must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.  
See [IExecutable](../iexecutable), [Parameters](../parameters).

> `public static` execute(context: [IContext](../../context/context), components: any[], args: [Parameters](../parameters)): Promise\<any[]\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **components**: any[] - list of components that are to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**:  Promise\<any[]\> - execution result

#### executeOne
Executes a specific component.

To be executed, components must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.

> `public static` executeOne(context: [IContext](../../context/context), component: any, args: [Parameters](../parameters)): Promise\<any\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **component**: any - component that is to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**:  Promise\<any\> - execution result.

### See also
- #### [IExecutable](../iexecutable)

