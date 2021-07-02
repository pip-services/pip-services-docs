---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public static` execute(correlationId: string, components: any[], args: [Parameters](../parameters)): Promise\<any[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: any[] - list of components that are to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**:  Promise\<any[]\> - execution result

#### executeOne
Executes a specific component.

To be executed, components must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.

> `public static` executeOne(correlationId: string, component: any, args: [Parameters](../parameters)): Promise\<any\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: any - component that is to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**:  Promise\<any\> - execution result.

### See also
- #### [IExecutable](../iexecutable)
