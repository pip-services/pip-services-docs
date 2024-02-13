---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: >
    Helper class that allows you to execute one or more components.
---

### Description

The Executor class allows you to execute one or more components.


### Static methods

#### execute
Executes multiple components.

To be executed components must implement [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.  
See [IExecutable](../iexecutable), [Parameters](../parameters)

> `static` execute(context: Optional[IContext], components: List[Any], args: [Parameters](../parameters))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: List[Any] - a list of components that are to be executed.
- **args**: [Parameters](../parameters) - execution arguments.

#### execute_one
Executes specific component.

To be executed components must implement [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.

> `static` execute_one(context: Optional[IContext], component: Any, args: [Parameters](../parameters))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: Any - the component that is to be executed.
- **args**: [Parameters](../parameters) - execution arguments.

### See also
- #### [IExecutable](../iexecutable)
