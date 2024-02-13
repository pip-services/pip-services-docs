---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
description: >
    Helper class that allows you to execute one or more components.
---

### Description

The Executor class allows you to execute one or more components.


### Static methods

#### ExecuteAsync
Executes multiple components.

To be executed, components must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.  
See [IExecutable](../iexecutable), [Parameters](../parameters)

> `public static` Task\<List\<object\>\> ExecuteAsync(IContext context, IEnumerable components, [Parameters](../parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: IEnumerable - list of components that are to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**:  Task\<List\<object\>\> - execution result

#### ExecuteOneAsync
Executes a specific component.

To be executed, components must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.

> `public static` Task\<object\> ExecuteOneAsync(IContext context, object component, [Parameters](../parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: object - component that is to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Task\<object\> - execution result.

### See also
- #### [IExecutable](../iexecutable)

