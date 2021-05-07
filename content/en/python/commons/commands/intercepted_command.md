---
type: docs
title: "InterceptedCommand"
linkTitle: "InterceptedCommand"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: > 
    Implements a [command](../icommand) wrapped by an interceptor.
    
---

**Implements:** [ICommand](../icommand)

### Description

The InterceptedCommand allows you  to implement a [command](../icommand) wrapped by an interceptor. Thus, it allows you to build command call chains, where the interceptor can alter execution and delegate calls to a next command, which can be intercepted or not.

### Constructors
Creates a new [InterceptedCommand](), which serves as a link in an execution chain. Contains information 
about the interceptor that is being used and the next command in the chain.

> InterceptedCommand(interceptor: [ICommandInterceptor](../icommand_interceptor), next: [ICommand](../icommand))

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) - the interceptor that is intercepting the command.
- **next**: [ICommand](../icommand) - (link to) the next command in the command's execution chain.


### Instance methods

#### execute
Executes the next command in the execution chain using the given [parameters](../../run/parameters) (arguments).  
See [Parameters](../../run/parameters)

> execute(correlation_id: Optional[str], args: [Parameters](../../run/parameters)): Any

- **correlation_id**: Optional[str] - unique transaction id to trace calls across components.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to the command for execution.
- **returns**: Any - the execution result

#### get_name
Gets the command_name name.

> get_name(): str

- **returns**: str - the name of the command that is being intercepted.


#### validate
Validates the [parameters](../../run/parameters) (arguments) that are to be passed to the command that is next 
in the execution chain.  
See [Parameters](../../run/parameters), [ValidationResult](../../validate/validation_result)

> validate(args: [Parameters](../../run/parameters)): List[[ValidationResult](../../validate/validation_result)]

- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate for the next command.
- **returns**: List[[ValidationResult](../../validate/validation_result)] - an array of ValidationResults.

### Examples

```python
class CommandLogger(ICommandInterceptor):
    def get_name(self, command_name):
        return command_name.get_name()
    def execute():
        # do something
    def validate():
        # do something
   
logger = new CommandLogger()
logged_command = InterceptedCommand(logger, command)

# Each called command will output: Executed command <command name>
```

### See also
- #### [ICommand](../icommand)
- #### [ICommandInterceptor](../icommand_interceptor)
