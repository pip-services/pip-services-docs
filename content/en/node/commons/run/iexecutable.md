---
type: docs
title: "IExecutable"
linkTitle: "IExecutable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface that allows you to create a component that can be called to execute work.

---

### Description

The IExecutable interface allows you to create a component that can be called to execute work.

### Instance methods

#### execute
Executes a component with arguments and receives the execution result.

> execute(correlationId: string, args: [Parameters](../parameters)): Promise\<any\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Promise\<any\> - execution result. 

### Examples

```typescript
class EchoComponent implements IExecutable {
    ...
    public async execute(correlationId: string, args: Parameters): Promise\<any\> {
        let result = args.getAsObject("message");
        return result;
    }
}
    
let echo = new EchoComponent();
let message = "Test";
let result = await echo.execute("123", Parameters.fromTuples("message", message))
console.log("Request: " + message + " Response: " + result);

```

### See also
- #### [Executor](../executor)
- #### [INotifiable](../inotifiable)
- #### [Parameters](../parameters)
