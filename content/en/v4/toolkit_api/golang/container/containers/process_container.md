---
type: docs
title: "ProcessContainer"
linkTitle: "ProcessContainer"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-container-go"
description: >
    Inversion of control (IoC) container that runs as a system process.
   
---

**Implements:** [Container](../container)

### Description

The ProcessContainer class allows you to create an inversion of control (IoC) container that runs as a system process.

Important points

- It processes command line arguments and handles unhandled exceptions and Ctrl-C signal to shutdown the container properly.

### Command line arguments
- **--config / -c**            path to a JSON or YAML file with the container's configuration (default: "./config/config.yml")
- **--param / --params / -p**   configuration parameters
- **--help / -h**              prints the container usage help

### Constructors

#### NewProcessContainer
Creates a new instance of the container.

> NewProcessContainer(name string, description string) [*ProcessContainer]()

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))

#### NewEmptyProcessContainer
Creates a new instance of the container.

> NewEmptyProcessContainer() [*ProcessContainer]()

- **name**: string - (optional) container's name (accessible via [ContextInfo](../../../components/context/context_info))
- **description**: string - (optional) container's description (accessible via [ContextInfo](../../../components/context/context_info))

### Fields

<span class="hide-title-link">

#### configPath
Path to the configuration file.
> **configPath**: string = "./config/config.yml"

</span>

### Methods

#### Run
Runs the container by instantiating and running components inside the container.

It reads the container configuration, and creates, configures, references and opens components.
On process exit; it closes, unreferences and destroys components in order to shutdown properly.

> (c [*ProcessContainer]()) Run(ctx context.Context, args []string)

- **ctx**: context.Context - opeartion context.
- **args**: []string - command line arguments

### Examples

```go
container = NewEmptyProcessContainer()
container.Container.AddFactory(NewMyComponentFactory())
container.Run(context.Background(), os.Environ())
```

### See also
- #### [Container](../container)

