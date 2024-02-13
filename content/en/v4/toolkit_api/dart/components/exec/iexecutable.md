---
type: docs
title: "IExecutable"
linkTitle: "IExecutable"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
description: >
    Interface that allows you to create a component that can be called to execute work.

---

### Description

The IExecutable interface allows you to create a component that can be called to execute work.

### Instance methods

#### execute
Executes a component with arguments and receives the execution result.

> Future\<dynamic\> execute(IContext? context, [Parameters](../parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: [Parameters](../parameters) - execution arguments.
- **returns**: Future\<dynamic\> - execution result. 

### Examples

```dart
class EchoComponent implements IExecutable {
    ...
    Future<dynamic> execute(IContext? context, Parameters args)  {
       return Future.delayed(Duration(), (){
           return args.getAsObject('message');
       })
    }
}

var echo =  EchoComponent();
var message = 'Test';
echo.execute('123', Parameters.fromTuples(['message', message])
   .then((result) {
        console.log('Request: ' + message + ' Response: ' + result);
    })
);

```

### See also
- #### [Executor](../executor)
- #### [INotifiable](../inotifiable)
- #### [Parameters](../parameters)
