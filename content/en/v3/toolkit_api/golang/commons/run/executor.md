---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Helper class that allows you to execute one or more components.
---

### Description

The Executor class allows you to execute one or more components.


### Methods

#### Execute
Executes multiple components.

To be executed components must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.  
See [IExecutable](../iexecutable), [Parameters](../parameters)

> Execute(context.Context, correlationId string, components []any, args [*Parameters](../parameters)) ([]any, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: []any - list of components that are to be executed.
- **args**: [*Parameters](../parameters) - execution arguments.
- **returns**:  ([]any, error) - execution result

#### ExecuteOne
Executes a specific component.

To be executed a component must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.

> ExecuteOne(ctx context.Context, correlationId string, component any, args [*Parameters](../parameters)) (any, error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: any - component that is to be executed.
- **args**: [*Parameters](../parameters) - execution arguments.
- **returns**:  (any, error) - execution result.

### See also
- #### [IExecutable](../iexecutable)
