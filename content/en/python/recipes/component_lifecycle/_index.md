---
type: docs
no_list: true
title: "Component Lifecycle"
linkTitle: "Component Lifecycle"
weight: 30
---

- by Alex Mazur

### Introduction

A microservice is a set of loosely coupled components, each of which serves a specific purpose, such as logging events, reading records from a database, or connecting to a 3rd party service.
One of the roles of the microservice’s container is to correctly initialize all internal components, each of which can have its own lifecycle. For example, loading its own configuration, running certain functional processes, and even waiting for results from other components. The order in which component lifecycle management methods are called is as follows:

![ConsoleScreen1](/images/tutorials/component_lifecycle/component_lifecycle_scheme.png)

1. Configuration of the component is performed (configure)
2. Components are linked (setReference)
3. Connections are opened and active processes are started (open)
4. Business processes are called or event notifications are sent (execute, notify)
5. Active processes are stopped and connections are closed (close)
6. The links between components are destroyed (unsetReferences)
7. The component is destroyed

A flexible and, at the same time, standardized approach was developed in the Pip.Services Toolkit for initializing components. This approach preserves the conceptual integrity of the whole microservice, while keeping the source code clean, coherent, and testable. A component’s lifecycle is determined by which of the following interfaces it implements:

- IConfigurable – component configuration [Config](../../commons/config).
- IReferenceable и IUnreferenceable – setting and destroying references to other components [Reference](../../commons/refer/reference).
- IOpenable и IClosable – starting and stopping internal functional processes [Openable](../../commons/run/iopenable).
- IExecutable – execution of functional processes [Executable](../../commons/run/iexecutable).
- INotifiable - sending event notifications [Notifiable](../../commons/run/inotifiable).

```python

class IConfigurable(ABC):

    def configure(self, config: ConfigParams):
        raise NotImplementedError('Method from interface definition')


class IReferenceable(ABC):

    def set_references(self, references: IReferences):
        raise NotImplementedError('Method from interface definition')


class IOpenable(IClosable):

    def is_open(self) -> bool:
        raise NotImplementedError('Method from interface definition')

    def open(self, correlation_id: Optional[str]):
        raise NotImplementedError('Method from interface definition')


class IClosable(ABC):

    def close(self, correlation_id: Optional[str]):
        raise NotImplementedError('Method from interface definition')


class IExecutable(ABC):

    def execute(self, correlation_id: Optional[str], args: Parameters):
        raise NotImplementedError('Method from interface definition')

```

Microservice developers are free to implement just the interfaces needed by their components. When the container is started, all implemented methods will be called in the previously mentioned order. 
For example: 

```python
from typing import Optional

from pip_services3_commons.config import IReconfigurable, ConfigParams
from pip_services3_commons.refer import IReferenceable, IReferences
from pip_services3_commons.run import FixedRateTimer, IOpenable, IExecutable, Parameters

from pip_services3_components.log import CompositeLogger, LogLevel, ConsoleLogger


class CounterController(IReferenceable, IReconfigurable, IOpenable, IExecutable):
    __logger = CompositeLogger()
    __timer = FixedRateTimer()
    __parameters = Parameters()
    __counter = 0
    __logger.set_level(LogLevel.Debug)

    def configure(self, config: ConfigParams):
        self.__parameters = Parameters.from_config(config)

    def set_references(self, references: IReferences):
        self.__logger.set_references(references)

    def is_open(self) -> bool:
        return self.__timer.is_started()

    def open(self, correlation_id: Optional[str]):
        self.__timer.set_callback(lambda: self.execute(correlation_id, self.__parameters))
        self.__timer.set_interval(1000)
        self.__timer.set_delay(1000)
        self.__timer.start()
        self.__logger.trace(correlation_id, "Counter controller opened")

    def close(self, correlation_id: Optional[str]):
        self.__timer.stop()
        self.__logger.trace(correlation_id, "Counter controller closed")

    def execute(self, correlation_id: Optional[str], args: Parameters):
        self.__counter += 1

        self.__logger.info(
            correlation_id,
            f"{self.__counter} - {self.__parameters.get_as_string_with_default('message', 'Hello World!')}"
        )

        return self.__counter

```

The Pip.Service’s Toolkit also includes a few utilities that can be used during microservice development:
- Opener – initiates the functional processes of selected components.
- Closer – stops the functional processes of selected components.
- Executor – runs the functional processes of selected components.
- Notifier - sends event notifications for selected components.
- Cleaner – cleans the current state of selected components.


For example:

```python
Opener.open(correlation_id, _references.get_all())
...
Closer.close(correlation_id, _references.get_all())
```
