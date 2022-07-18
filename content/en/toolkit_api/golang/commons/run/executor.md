---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
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

> (c *TExecutor) Execute(correlationId string, components []interface{}, args [*Parameters](../parameters)) ([]interface{}, error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: []interface{} - list of components that are to be executed.
- **args**: [*Parameters](../parameters) - execution arguments.
- **returns**:  ([]interface{}, error) - execution result

#### ExecuteOne
Executes a specific component.

To be executed a component must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.

> (c *TExecutor) ExecuteOne(correlationId string, component interface{}, args [*Parameters](../parameters)) (interface{}, error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: interface{} - component that is to be executed.
- **args**: [*Parameters](../parameters) - execution arguments.
- **returns**:  (interface{}, error) - execution result.

### See also
- #### [IExecutable](../iexecutable)
