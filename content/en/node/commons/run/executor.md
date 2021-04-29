---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
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

> `public static` execute(correlationId: string, components: any[], args: [Parameters](../parameters)): Promise<any[]>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **components**: any[] - a list of components that are to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**:  Promise<any[]> - an execution result

#### executeOne
Executes specific component.

To be executed components must implement [IExecutable](../iexecutable) interface.
If they don't the call to this method has no effect.

> `public static` executeOne(correlationId: string, component: any, args: [Parameters](../parameters)): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: any - the component that is to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**:  Promise\<any\> - an execution result.

### See also
- #### [IExecutable](../iexecutable)