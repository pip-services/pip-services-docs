---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that executes components.
---

See also [IExecutable](../iexecutable)


### Methods

#### execute
Executes multiple components.

To be executed components must implement [IExecutable](../iexecutable) interface.
If they don't the call to this method has no effect.  
See [IExecutable](../iexecutable), [Parameters](../parameters)

> `static` execute(correlation_id: str, components: List[Any], args: [Parameters](../parameters))

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **components**: List[Any] - a list of components that are to be executed.
- **args**: [Parameters](../parameters) - execution arguments.

#### execute_one
Executes specific component.

To be executed components must implement [IExecutable](../iexecutable) interface.
If they don't the call to this method has no effect.

> `static` execute_one(correlation_id: str, component: Any, args: [Parameters](../parameters))

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **component**: Any - the component that is to be executed.
- **args**: [Parameters](../parameters) - execution arguments.

### See also
- #### [IExecutable](../iexecutable)