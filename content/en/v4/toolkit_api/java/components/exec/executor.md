---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
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
See [IExecutable](../iexecutable), [Parameters](../../run/parameters).

> `public static` List<Object> execute(IContext context, Iterable<Object> components, [Parameters](../../run/parameters) args)

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **components**: Iterable<Object> - list of components that are to be executed.
- **args**: [Parameters](../../run/parameters) - execution arguments.
- **returns**:  List<Object> - execution result

#### executeOne
Executes a specific component.

To be executed, components must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.

> `public static` Object executeOne([IContext](../../context/context) context, Object component, [Parameters](../../run/parameters) args)

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **component**: Object - component that is to be executed.
- **args**: [Parameters](../../run/parameters) - execution arguments.
- **returns**:  Object - execution result.

### See also
- #### [IExecutable](../iexecutable)
