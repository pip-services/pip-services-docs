---
type: docs
title: "CommandSet"
linkTitle: "CommandSet" 
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

### Type

```go
type CommandSet struct {
	// contains filtered or unexported fields
}
```

Contains a set of commands and events supported by a commandable object. The CommandSet supports command interceptors to extend and the command call chain.

CommandSets can be used as alternative commandable interface to a business object. It can be used to auto generate multiple external services for the business object without writing much code. 

see [Command](../command), [Event](../event), [ICommandable](../icommandable)

**Example:**

```go
type MyDataCommandSet {
	CommandSet
    _controller IMyDataController
 }
    func (dcs * MyDataCommandSet) CreateMyDataCommandSet(controller IMyDataController) { // Any data controller interface
        dcs._controller = controller
        dcs.addCommand(dcs.makeGetMyDataCommand())
    }

    func (dcs * MyDataCommandSet) makeGetMyDataCommand() ICommand {
        return NewCommand(
          "get_mydata",
          null,
          (correlationId: string, args: Parameters, func (correlationId string, args *run.Parameters)(interface{}, err) {
              let param = args.getAsString("param");
              return dcs._controller.getMyData(correlationId, param,);
          }
        );
    }
```

### Funcs

> func NewCommandSet() *[CommandSet]()

Creates an empty CommandSet object. 

- Returns *[CommandSet]()

> func (c *[CommandSet]()) AddCommand(command [ICommand](../icommand))

Adds a command to this command set. 

- command: [ICommand](../icommand) the command to add.

see [ICommand](../icommand)

> func (c *[CommandSet]()) AddCommandSet(commandSet *[CommandSet]())

Adds all of the commands and events from specified command set into this one.

- commands: [][ICommand](../icommand) the array of commands to add.

> func (c *[CommandSet]()) AddEvent(event [IEvent](../ievent))

- Adds an event to this command set. 
see [IEvent](../ievent)

> func (c *[CommandSet]()) AddEvents(events [][IEvent](../ievent))

- events: [][IEvent](../ievent) the array of events to add.

> func (c *[CommandSet]()) AddInterceptor(interceptor [ICommandInterceptor](../icommandinterceptor))

Adds a command interceptor to this command set. 

- interceptor: [ICommandInterceptor](../icommandinterceptor) the interceptor to add.

see [ICommandInterceptor](../icommandinterceptor)

> func (c *[CommandSet]()) AddListener(listener [IEventListener](../ieventlistener))

Adds a listener to receive notifications on fired events. 

- listener: [IEventListener](../ieventlistener) the listener to add.

see [IEventListener](../ieventlistener)

> func (c *[CommandSet]()) Commands() [][ICommand](../icommand)

Gets all commands registered in this command set. 

- Returns [][ICommand](../icommand) a list of commands.

see [ICommand](../icommand) 

> func (c *[CommandSet]()) Events() [][IEvent](../ievent)

Gets all events registred in this command set. 

- Returns [][IEvent](../ievent) a list of events.

see [IEvent](../ievent) 

> func (c *[CommandSet]()) Execute(correlationId [string](https://pkg.go.dev/builtin#string), commandName [string](https://pkg.go.dev/builtin#string), args *[run.Parameters](../../run/parameters)) (result interface{}, err [error](https://pkg.go.dev/builtin#error))

Executes a command specificed by its name.

- correlationId: [string](https://pkg.go.dev/builtin#string) (optional) transaction id to trace execution through call chain.
- commandName: [string](https://pkg.go.dev/builtin#string) the name of that command that is to be executed.
- args: [Parameters](../../run/parameters) the parameters (arguments) to pass to the command for execution.

* Returns
    - result: interface{}
    - err: [error](https://pkg.go.dev/builtin#error)

see [ICommand](icommand), [Parameters](../../run/parameters)

> func (c *[CommandSet]()) FindCommand(commandName [string](https://pkg.go.dev/builtin#string)) [ICommand](icommand)

Searches for a command by its name. 

- commandName: [string](https://pkg.go.dev/builtin#string) the name of the command to search for.
- Returns [ICommand](icommand) the command, whose name matches the provided name.

see [ICommand](icommand)

> func (c *[CommandSet]()) FindEvent(eventName [string](https://pkg.go.dev/builtin#string)) [IEvent](../ievent)

Searches for an event by its name in this command set. 

- eventName: [string](https://pkg.go.dev/builtin#string) the name of the event to search for.
- Returns [IEvent](../ievent) the event, whose name matches the provided name.

see [IEvent](../ievent)

> func (c *[CommandSet]()) Notify(correlationId [string](https://pkg.go.dev/builtin#string), eventName [string](https://pkg.go.dev/builtin#string), args *[run.Parameters](../../run/parameters))

Fires event specified by its name and notifies all registered listeners

- correlationId: [string](https://pkg.go.dev/builtin#string) (optional) transaction id to trace execution through call chain.
- eventName: [string](https://pkg.go.dev/builtin#string) the name of the event that is to be fired.
- args: [Parameters](../../run/parameters) the event arguments (parameters).

> func (c *[CommandSet]()) RemoveListener(listener [IEventListener](../ieventlistener))

Removes previosly added listener. 

- listener: [IEventListener](../ieventlistener)   the listener to remove.

see [IEventListener](../ieventlistener) 

> func (c *[CommandSet]()) Validate(commandName [string](https://pkg.go.dev/builtin#string), args *[run.Parameters](../../run/parameters)) []\*[validate.ValidationResult](../../validate/validationresult)

Validates args for command specified by its name using defined schema. 
If validation schema is not defined than the methods returns no errors. 
It returns validation error if the command is not found. 

- commandName: [string](https://pkg.go.dev/builtin#string) the name of the command for which the 'args' must be validated.
- args: [Parameters](../../run/parameters) the parameters (arguments) to validate.

- Returns []ValidationResult an array of [ValidationResult](../../validate/validationresult). If no command is found by the given name, then the returned array of [ValidationResult](../../validate/validationresult) will contain a single entry, whose type will be [ValidationResult.Error](../../validate/validationresult#error).

see [Command](../command), [Parameters](../../run/parameters), [ValidationResult](../../validate/validationresult)









