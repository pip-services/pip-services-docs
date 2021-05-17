---
type: docs
title: "IExecutable"
linkTitle: "IExecutable"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Interface that allows you to create a component that can be called to execute work.

---

### Description

The IExecutable interface allows you to create a component that can be called to execute work.

### Instance methods

#### execute
Executes a component with arguments and receives the execution result.

> execute(correlationId: str, args: [Parameters](../parameters))

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **args**: [Parameters](../parameters) - execution arguments.

### Examples

```python
class EchoComponent(IExecutable):
    ...
    def execute(self, correlation_id: Optional[str], args: Parameters): 
        result = args.get_as_object("message")
        return result
    
echo = new EchoComponent()
message = "Test";
result = echo.execute("123", Parameters.from_tuples("message", message))
print("Request: " + message + " Response: " + result)
```

### See also
- #### [Executor](../executor)
- #### [INotifiable](../inotifiable)
- #### [Parameters](../parameters)
