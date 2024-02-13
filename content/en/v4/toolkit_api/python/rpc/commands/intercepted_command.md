---
type: docs
title: "InterceptedCommand"
linkTitle: "InterceptedCommand"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-rpc-python"
description: > 
    Implements a [command](../icommand) wrapped by an interceptor.
    
---

**Implements:** [ICommand](../icommand)

### Description

The InterceptedCommand allows you  to implement a [command](../icommand) wrapped by an interceptor. Thus, it allows you to build command call chains, where the interceptor can alter execution and delegate calls to a next command, which can then be intercepted or not.

### Constructors
Creates a new [InterceptedCommand](), which serves as a link in an execution chain. Contains information 
about the interceptor that is being used and the next command in the chain.

> InterceptedCommand(interceptor: [ICommandInterceptor](../icommand_interceptor), next: [ICommand](../icommand))

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) - the interceptor that is intercepting the command.
- **next**: [ICommand](../icommand) - (link to) the next command in the command's execution chain.


### Instance methods

#### execute
Executes the next command in the execution chain using the given [parameters](../../../components/exec/parameters) (arguments).  
See [Parameters](../../../components/exec/parameters)

> execute(context: Optional[str], args: [Parameters](../../../components/exec/parameters)): Any

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **args**: [Parameters](../../../components/exec/parameters) - the parameters (arguments) to pass to the command for execution.
- **returns**: Any - the execution result

#### get_name
Gets the command_name name.

> get_name(): str

- **returns**: str - the name of the command that is being intercepted.


#### validate
Validates the [parameters](../../../components/exec/parameters) (arguments) that are to be passed to the command that is next 
in the execution chain.  
See [Parameters](../../../components/exec/parameters), [ValidationResult](../../../data/validate/validation_result)

> validate(args: [Parameters](../../../components/exec/parameters)): List[[ValidationResult](../../../validate/validation_result)]

- **args**: [Parameters](../../../components/exec/parameters) - the parameters (arguments) to validate for the next command.
- **returns**: List[[ValidationResult](../../../data/validate/validation_result)] - an array of ValidationResults.

### Examples

```python
from typing import Optional, Any, List

from pip_services3_commons.commands import Command
from pip_services3_commons.commands import ICommandInterceptor, ICommand, InterceptedCommand
from pip_services3_commons.run import Parameters
from pip_services3_commons.validate import ValidationResult, ValidationException, ObjectSchema


class CommandLogger(ICommandInterceptor):
    def get_name(self, command_name):
        return command_name.get_name()

    def execute(self, context: Optional[str], command: ICommand, args: Parameters) -> Any:
        print('exec call')
        print('my own exec logic')
        ...
        # for example
        results = self.validate(command, args)
        if len(results) > 1:
            raise ValidationException.from_results(None, results, True)

        command.execute(context, args)

    def validate(self, command: ICommand, args: Parameters) -> List[ValidationResult]:
        print('validate call')
        print('my own validat logic')
        ...
        # for example
        results = command.validate(args)
        if len(results) < 1:
            return results

        print('validation complete')
        return []


command = Command(
    "my_command",
    ObjectSchema().with_required_property("param"),
    lambda context, args: print(f'called command: my_command, with param: {args.get("param")}')
)

logger = CommandLogger()
logged_command = InterceptedCommand(logger, command)
logged_command.execute('123', Parameters.from_tuples('param', 123))

```

### See also
- #### [ICommand](../icommand)
- #### [ICommandInterceptor](../icommand_interceptor)
