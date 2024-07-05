---
type: docs
no_list: true
title: "Component Lifecycle"
linkTitle: "Component Lifecycle"
---

{{< tabselector "Node" ".NET" "Golang" "Dart" "Python" "Java" >}}

- by Alex Mazur

### Component lifecycle

A microservice is a set of loosely coupled components, each of which serves a specific purpose, such as logging events, reading records from a database, or connecting to a 3rd party service.
One of the roles of the microservice's container is to correctly initialize all internal components, each of which can have its own lifecycle. For example, loading its own configuration, running certain functional processes, and even waiting for results from other components. The order in which component lifecycle management methods are called is as follows:

![ConsoleScreen1](/images/tutorials/component_lifecycle/component_lifecycle_scheme.svg)

1. Configuration of the component is performed (configure)
2. Components are linked (setReference)
3. Connections are opened and active processes are started (open)
4. Business processes are called or event notifications are sent (execute, notify)
5. Active processes are stopped and connections are closed (close)
6. The links between components are destroyed (unsetReferences)
7. The component is destroyed

A flexible and, at the same time, standardized approach was developed in the Pip.Services Toolkit for initializing components. This approach preserves the conceptual integrity of the whole microservice, while keeping the source code clean, coherent, and testable. A component's lifecycle is determined by which of the following interfaces it implements:

{{< tabsection isMarkdown=true >}}

- [IConfigurable](../../../toolkit_api/node/components/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../toolkit_api/node/components/refer/ireferenceable/) and [IUnreferenceable](../../../toolkit_api/node/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../toolkit_api/node/components/run/iopenable) and [IClosable](../../../toolkit_api/node/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../toolkit_api/node/components/exec/iexecutable) – execution of functional processes.
- [INotifiable](../../../toolkit_api/node/components/exec/inotifiable) - sending event notifications.

```typescript

export interface IConfigurable {
    configure(config: ConfigParams): void;
}

export interface IReferenceable {
	setReferences(references: IReferences): void;
}

export interface IOpenable extends IClosable {

	isOpen(): boolean;

	open(correlationId: string): Promise<void>;
}


export interface IClosable {
	close(correlationId: string): Promise<void>;
}


export interface IExecutable {
	execute(correlationId: string, args: Parameters): Promise<any>;
}

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [IConfigurable](../../../net/components/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../net/components/refer/ireferenceable/) and [IUnreferenceable](../../../net/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../net/components/run/iopenable) and [IClosable](../../../net/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../net/components/exec/iexecutable) – execution of functional processes.
- [INotifiable](../../../net/components/exec/inotifiable) - sending event notifications.

```cs


```

{{< /tabsection >}}


{{< tabsection isMarkdown=true >}}

- [IConfigurable](../../../golang/components/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../golang/components/refer/ireferenceable/) and [IUnreferenceable](../../../golang/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../golang/components/run/iopenable) and [IClosable](../../../golang/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../golang/components/exec/iexecutable) – execution of functional processes.
- [INotifiable](../../../golang/components/exec/inotifiable) - sending event notifications.

```go
type IConfigurable interface {
	Configure(ctx context.Context, config *ConfigParams)
}

type IReferenceable interface {
	SetReferences(ctx context.Context, references IReferences)
}

type IOpenable interface {
	IClosable

	IsOpen() bool

	Open(ctx context.Context) error
}


type IClosable interface {
	Close(ctx context.Context) error
}


type IExecutable interface {
	Execute(ctx context.Context, args *Parameters) (result interface{}, err error)
}

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [IConfigurable](../../../dart/components/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../dart/components/refer/ireferenceable/) and [IUnreferenceable](../../../dart/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../dart/components/run/iopenable) and [IClosable](../../../dart/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../dart/components/exec/iexecutable) – execution of functional processes.
- [INotifiable](../../../dart/components/exec/inotifiable) - sending event notifications.

```dart

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [IConfigurable](../../../python/components/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../python/components/refer/ireferenceable/) and [IUnreferenceable](../../../python/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../python/components/run/iopenable) and [IClosable](../../../python/components/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../python/components/exec/iexecutable) – execution of functional processes.
- [INotifiable](../../../python/components/exec/inotifiable) - sending event notifications.

```python
from abc import ABC
from pip_services4_components.config import ConfigParams
from pip_services4_components.refer import IReferences
from pip_services4_components.run import IClosable
from pip_services4_components.exec import Parameters
from typing import Optional

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

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}

### Implementation

Microservice developers are free to implement just the interfaces needed by their components. When the container is started, all implemented methods will be called in the previously mentioned order. 
For example: 

{{< tabsection isMarkdown=true >}}

```typescript
import { ConfigParams, FixedRateTimer, Parameters, Context } from "pip-services4-components-node";
import { IReconfigurable, IReferenceable, IExecutable, IOpenable, IReferences } from "pip-services4-components-node";
import { CompositeLogger, LogLevel } from "pip-services4-observability-node";

class CounterController implements IReferenceable, IReconfigurable, IOpenable, IExecutable {
  

    private logger = new CompositeLogger();
    private timer = new FixedRateTimer();
    private parameters = new Parameters();
    private counter = 0;
  
    public constructor(){
        this.logger.setLevel(LogLevel.Debug);
    }

    public configure(config: ConfigParams){
        this.parameters = Parameters.fromConfig(config);
    }
    

    public setReferences(references: IReferences){
        this.logger.setReferences(references);
    }
    

    public isOpen(): boolean{
        return this.timer.isStarted();
    }

    public async open(ctx: Context): Promise<void> {
        if (this.isOpen()) {
            return;
        }

        this.timer.setCallback(() => this.execute(ctx, this.parameters))
        this.timer.setInterval(1000)
        this.timer.setDelay(1000)
        this.timer.start()
        this.logger.trace(ctx, "Counter controller opened")

    }
    
    public async close(ctx: Context): Promise<void> {
        this.timer.stop()
        this.logger.trace(ctx, "Counter controller closed")
    }
    

    public execute(ctx: Context, args: Parameters): Promise<any> {
        this.counter += 1;

        this.logger.info(
            ctx,
            this.counter + " - " + this.parameters.getAsStringWithDefault('message', 'Hello World!')
        )

        let result = args.getAsObject("message");
        return result;
    }
}

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```cs

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```go
import (
	"context"

	cexec "github.com/pip-services4/pip-services4-go/pip-services4-components-go/exec"
	crefer "github.com/pip-services4/pip-services4-go/pip-services4-components-go/refer"
	clog "github.com/pip-services4/pip-services4-go/pip-services4-observability-go/log"
)

type CounterController struct {
	logger     *clog.CompositeLogger
	timer      *cexec.FixedRateTimer
	parameters *cexec.Parameters
	counter    int
}

func NewCounterController() *CounterController {
	instance := &CounterController{
		logger:     clog.NewCompositeLogger(),
		timer:      cexec.NewFixedRateTimer(),
		parameters: cexec.NewEmptyParameters(),
		counter:    0,
	}

	instance.logger.SetLevel(clog.LevelDebug)

	return instance
}

func (c *CounterController) SetReferences(ctx context.Context, references crefer.IReferences) {
	c.logger.SetReferences(ctx, references)
}

func (c *CounterController) IsOpen() bool {
	return c.timer.IsStarted()
}

func (c *CounterController) Open(ctx context.Context) error {
	if c.IsOpen() {
		return nil
	}

	c.timer.SetCallback(func(ctx context.Context) { c.Execute(context.Background(), *c.parameters) })
	c.timer.SetInterval(1000)
	c.timer.SetDelay(1000)
	c.timer.Start(context.Background())
	c.logger.Trace(context.Background(), "Counter controller opened")

	return nil
}

func (c *CounterController) Close(ctx context.Context) error {
	c.timer.Stop(ctx)
	c.logger.Trace(context.Background(), "Counter controller closed")

	return nil
}

func (c *CounterController) Execute(ctx context.Context, args cexec.Parameters) (result interface{}, err error) {
	message, ok := args.GetAsObject("message")
	if !ok {
		return nil, nil
	}
	return message, nil
}
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```dart

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```python
from typing import Optional

from pip_services4_components.config import IReconfigurable, ConfigParams
from pip_services4_components.exec import FixedRateTimer,Parameters, IExecutable
from pip_services4_components.run import IOpenable
from pip_services4_components.refer import IReferenceable, IReferences
from pip_services4_observability.log import CompositeLogger, LogLevel, ConsoleLogger


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

    def open(self, context: Optional[IContext]):
        self.__timer.set_callback(lambda: self.execute(context, self.__parameters))
        self.__timer.set_interval(1000)
        self.__timer.set_delay(1000)
        self.__timer.start()
        self.__logger.trace(context, "Counter controller opened")

    def close(self, context: Optional[IContext]):
        self.__timer.stop()
        self.__logger.trace(context, "Counter controller closed")

    def execute(self, context: Optional[IContext], args: Parameters):
        self.__counter += 1

        self.__logger.info(
            trace_id,
            f"{self.__counter} - {self.__parameters.get_as_string_with_default('message', 'Hello World!')}"
        )

        return self.__counter

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}

### Utilities
The Pip.Service's Toolkit also includes a few utilities that can be used during microservice development:

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/node/components/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/node/components/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/node/components/exec/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/node/components/exec/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/node/components/run/cleaner/) – cleans the current state of selected components.

For example:

```typescript
await Opener.open(correlationId, references.getAll());
...
await Closer.close(correlationId, references.getAll());
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/net/components/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/net/components/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/net/components/exec/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/net/components/exec/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/net/components/run/cleaner/) – cleans the current state of selected components.


For example:

```cs
await Opener.OpenAsync(correlationId, _references.GetAll());
...
await Closer.CloseAsync(correlationId, _references.GetAll());
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/golang/components/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/golang/components/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/golang/components/exec/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/golang/components/exec/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/golang/components/run/cleaner/) – cleans the current state of selected components.


For example:

```go
err := crun.Opener.Open(context.Background(), correlationId, references.GetAll())
// ...
err = crun.Closer.Close(context.Background(), correlationId, references.GetAll())
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/dart/components/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/dart/components/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/dart/components/exec/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/dart/components/exec/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/dart/components/run/cleaner/) – cleans the current state of selected components.


For example:

```dart
await Opener.open(correlationId, references.getAll());
...
await Closer.close(correlationId, references.getAll());
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/python/components/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/python/components/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/python/components/exec/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/python/components/exec/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/python/components/run/cleaner/) – cleans the current state of selected components.


For example:

```python
Opener.open(correlation_id, _references.get_all())
...
Closer.close(correlation_id, _references.get_all())
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}


