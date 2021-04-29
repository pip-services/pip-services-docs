---
type: docs
title: "IExecutable"
linkTitle: "IExecutable"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Interface for components that can be called to execute work.
---

See also [Executor](../executor), [INotifiable](../inotifiable), [Parameters](../parameters)

**Example:**
```typescript
class EchoComponent implements IExecutable {
    ...
    public async execute(correlationId: string, args: Parameters): Promise<any> {
        let result = args.getAsObject("message");
        return result;
    }
}
    
let echo = new EchoComponent();
let message = "Test";
let result = await echo.execute("123", Parameters.fromTuples("message", message))
console.log("Request: " + message + " Response: " + result);

```

### Methods

#### execute
Executes component with arguments and receives execution result.

> execute(correlationId: string, args: [Parameters](../parameters)): Promise\<any\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Promise\<any\> - the execution result. 

### See also
- #### [Executor](../executor)
- #### [INotifiable](../inotifiable)
- #### [Parameters](../parameters)