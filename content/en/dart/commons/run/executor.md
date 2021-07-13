---
type: docs
title: "Executor"
linkTitle: "Executor"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
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

> `static` Future\<List\> execute(String correlationId, List components, [Parameters](../parameters) args)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **components**: List - list of components that are to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Future\<List\> - execution result

#### executeOne
Executes a specific component.

To be executed, components must implement the [IExecutable](../iexecutable) interface.
If they don't, the call to this method has no effect.

> `static` Future\<dynamic\> executeOne(String correlationId, component, [Parameters](../parameters) args)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **component**: dynamic - component that is to be executed.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Future\<dynamic\> - execution result.

### See also
- #### [IExecutable](../iexecutable)
