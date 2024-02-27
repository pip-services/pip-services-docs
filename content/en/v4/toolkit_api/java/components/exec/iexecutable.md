---
type: docs
title: "IExecutable"
linkTitle: "IExecutable"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    Interface that allows you to create a component that can be called to execute work.

---

### Description

The IExecutable interface allows you to create a component that can be called to execute work.

### Instance methods

#### execute
Executes a component with arguments and receives the execution result.

>  Object execute([IContext](../../context/context) context, [Parameters](../parameters) args) throws ApplicationException

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Object - execution result. 

### Examples

```java
{
  class EchoComponent implements IExecutable {
    ...
    public void execute(IContext context, Parameters args) {
      Object result = args.getAsObject("message");
    }
  }
 
  EchoComponent echo = new EchoComponent();
  String message = "Test";
  echo.execute("123", Parameters.fromTuples("message", message));
  }
```

### See also
- #### [Executor](../executor)
- #### [INotifiable](../inotifiable)
- #### [Parameters](../parameters)
