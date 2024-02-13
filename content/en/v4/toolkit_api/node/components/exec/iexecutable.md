---
type: docs
title: "IExecutable"
linkTitle: "IExecutable"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-components-node"
description: >
    Interface that allows you to create a component that can be called to execute work.

---

### Description

The IExecutable interface allows you to create a component that can be called to execute work.

### Instance methods

#### execute
Executes a component with arguments and receives the execution result.

> execute(context: [IContext](../../context/context), args: [Parameters](../parameters)): Promise\<any\>

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Promise\<any\> - execution result. 

### Examples

```typescript
class EchoComponent implements IExecutable {
    ...
    public async execute(context: IContext, args: Parameters): Promise<any> {
        let result = args.getAsObject("message");
        return result;
    }
}
 *     
let echo = new EchoComponent();
let message = "Test";
let result = await echo.execute("123", Parameters.fromTuples("message", message))
console.log("Request: " + message + " Response: " + result);

```

### See also
- #### [Executor](../executor)
- #### [INotifiable](../inotifiable)
- #### [Parameters](../parameters)
