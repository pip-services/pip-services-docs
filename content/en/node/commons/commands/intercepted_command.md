---
type: docs
title: "InterceptedCommand"
linkTitle: "InterceptedCommand"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: > 
    Implements a [command](../icommand) wrapped by an interceptor.
    
---

**Implements:** [ICommand](../icommand)

### Description

The InterceptedCommand allows you  to implement a [command](../icommand) wrapped by an interceptor. Thus, it allows you to build command call chains, where the interceptor can alter execution and delegate calls to a next command, which can then be intercepted or not.

### Constructors
Creates a new [InterceptedCommand](), which serves as a link in an execution chain. Contains information 
about the interceptor that is being used and the next command in the chain.

> `public` constructor(interceptor: [ICommandInterceptor](../icommand_interceptor), next: [ICommand](../icommand))

- **interceptor**: [ICommandInterceptor](../icommand_interceptor) - the interceptor that is intercepting the command.
- **next**: [ICommand](../icommand) - (link to) the next command in the command's execution chain.

### Instance methods

#### execute
Executes the next command in the execution chain using the given [parameters](../../run/parameters) (arguments).  
See [Parameters](../../run/parameters)

> `public` execute(correlationId: string, args: [Parameters](../../run/parameters)): Promise\<any\>

- **correlationId**: string - unique transaction id to trace calls across components.
- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to pass to the command for execution.
- **returns**: Promise\<any\> - the execution result

#### getName
TODO: add description here

> `public` getName(): string

- **returns**: string - the name of the command that is being intercepted.


#### validate
Validates the [parameters](../../run/parameters) (arguments) that are to be passed to the command that is next 
in the execution chain.  
See [Parameters](../../run/parameters), [ValidationResult](../../validate/validation_result)

> `public` validate(args: [Parameters](../../run/parameters)): [ValidationResult](../../validate/validation_result)[]

- **args**: [Parameters](../../run/parameters) - the parameters (arguments) to validate for the next command.
- **returns**: [ValidationResult](../../validate/validation_result)[] - an array of ValidationResults.

### Examples

```typescript
export class CommandLogger implements ICommandInterceptor {       
        
    public getName(command: ICommand): string {
        return command.getName();
    }
          
    public async execute(correlationId: string, command: ICommand, args: Parameters): Promise<any> {
        console.log("Executed command " + command.getName());
        await command.execute(correlationId, args);
    }
          
    private validate(command: ICommand, args: Parameters): ValidationResult[] {
        return command.validate(args);
    }
}
   
let logger = new CommandLogger();
let loggedCommand = new InterceptedCommand(logger, command); 

// Each called command will output: Executed command <command name>

```

### See also
- #### [ICommand](../icommand)
- #### [ICommandInterceptor](../icommand_interceptor)
