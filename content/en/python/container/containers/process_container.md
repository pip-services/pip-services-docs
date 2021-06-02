---
type: docs
title: "ProcessContainer"
linkTitle: "ProcessContainer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Inversion of control (IoC) container that runs as a system process.
   
---

**Implements:** [Container](../container)

### Description

The ProcessContainer class allows you to create an inversion of control (IoC) container that runs as a system process.

Important points

- It processes command line arguments and handles unhandled exceptions and Ctrl-C signal to gracefully shutdown the container.

### Command line arguments
- **--config / -c**            path to JSON or YAML file with container configuration (default: "./config/config.yml")
- **--param / --params / -p**   value(s) to parameterize the container configuration
- **--help / -h**              prints the container usage help

### Constructors
Creates a new instance of the container.

> ProcessContainer(name: str = None, description: str = None)

- **name**: str - (optional) a container name (accessible via ContextInfo)
- **description**: str - (optional) a container description (accessible via ContextInfo)

### Fields

<span class="hide-title-link">

#### _config_path
TODO: add description here
> **_config_path**: str = "./config/config.yml"

#### _logger
TODO: add description here
> **_logger**: [ILogger](../../../components/log/ilogger)

</span>

### Methods

#### run
Runs the container by instantiating and running components inside the container.

It reads the container configuration, creates, configures, references and opens components.
On process exit it closes, unreferences and destroys components to gracefully shutdown.

> run()

### Examples

```python
container = ProcessContainer()
container.add_factory(MyComponentFactory())

container.run()
```

### See also
- #### [Container](../container)
