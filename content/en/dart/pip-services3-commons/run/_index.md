---
type: docs
title: "Run"
linkTitle: "Run"
---

# Command

Concrete implementation of [ICommand](#icommand) interface. Command allows to call a method or function using Command pattern.

```.net
var command = new Command("add", null, async(args) => {
var param1 = args.GetAsFloat("param1");
var param2 = args.GetAsFloat("param2");
return param1 + param2; });
var result = command.ExecuteAsync("123", Parameters.fromTuples(
"param1", 2,
"param2", 2 ));
Console.WriteLine(result.ToString()); 
// Console output: 4
```

See [ICommand](#icommand), [CommandSet](#commandset)


# CommandSet


# Event


# ICommand


# ICommandable


# ICommandIntercepter


# IEvent


# IEventListener


# InterceptedCommand