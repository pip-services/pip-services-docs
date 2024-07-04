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

- [IConfigurable](../../../toolkit_api/node/commons/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../toolkit_api/node/commons/refer/ireferenceable/) and [IUnreferenceable](../../../toolkit_api/node/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../toolkit_api/node/commons/run/iopenable) and [IClosable](../../../toolkit_api/node/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../toolkit_api/node/commons/run/iexecutable) – execution of functional processes.
- [INotifiable](../../../toolkit_api/node/commons/run/inotifiable) - sending event notifications.

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

- [IConfigurable](../../../net/commons/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../net/commons/refer/ireferenceable/) and [IUnreferenceable](../../../net/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../net/commons/run/iopenable) and [IClosable](../../../net/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../net/commons/run/iexecutable) – execution of functional processes.
- [INotifiable](../../../net/commons/run/inotifiable) - sending event notifications.

```cs

public interface IConfigurable
{
    void Configure(ConfigParams config);
}
public interface IReferenceable
{
    void SetReferences(IReferences references);
}
public interface IOpenable : IClosable
{
    bool IsOpen();
    Task OpenAsync(string correlationId);
}
public interface IClosable
{
    Task CloseAsync(string correlationId);
}
public interface IExecutable
{
    Task<object> ExecuteAsync(string correlationId, Parameters args);
}

```

{{< /tabsection >}}


{{< tabsection isMarkdown=true >}}

- [IConfigurable](../../../golang/commons/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../golang/commons/refer/ireferenceable/) and [IUnreferenceable](../../../golang/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../golang/commons/run/iopenable) and [IClosable](../../../golang/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../golang/commons/run/iexecutable) – execution of functional processes.
- [INotifiable](../../../golang/commons/run/inotifiable) - sending event notifications.

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

	Open(ctx context.Context, correlationId string) error
}


type IClosable interface {
	Close(ctx context.Context, correlationId string) error
}


type IExecutable interface {
	Execute(ctx context.Context, correlationId string, args *Parameters) (result interface{}, err error)
}

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [IConfigurable](../../../dart/commons/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../dart/commons/refer/ireferenceable/) and [IUnreferenceable](../../../dart/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../dart/commons/run/iopenable) and [IClosable](../../../dart/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../dart/commons/run/iexecutable) – execution of functional processes.
- [INotifiable](../../../dart/commons/run/inotifiable) - sending event notifications.

```dart

abstract class IConfigurable {
  void configure(ConfigParams config);
}

abstract class IReferenceable {
  void setReferences(IReferences references);
}

abstract class IOpenable implements IClosable {
  bool isOpen();
  Future open(String? correlationId);
}

abstract class IClosable {
    Future close(String? correlationId);
}

abstract class IExecutable {
   Future<dynamic> execute(String? correlationId, Parameters args);
}
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [IConfigurable](../../../python/commons/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../python/commons/refer/ireferenceable/) and [IUnreferenceable](../../../python/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../python/commons/run/iopenable) and [IClosable](../../../python/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../python/commons/run/iexecutable) – execution of functional processes.
- [INotifiable](../../../python/commons/run/inotifiable) - sending event notifications.

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
public sealed class CounterController : IReferenceable, IReconfigurable, IOpenable, IExecutable
{
    private readonly CompositeLogger _logger = new CompositeLogger();
    private FixedRateTimer Timer { get; set; } = new FixedRateTimer();
    private Parameters Parameters { get; set; } = new Parameters();
    private long Counter { get; set; } = 0;
    public void Configure(ConfigParams config)
    {
        Parameters = Parameters.FromConfig(config);
    }
    public void SetReferences(IReferences references)
    {
        _logger.SetReferences(references);
    }
    public bool IsOpen()
    {
        return Timer.IsStarted;
    }
    public Task OpenAsync(string correlationId)
    {
        Timer.Task = new Action(async () => await ExecuteAsync(correlationId, Parameters));
        Timer.Interval = 1000;
        Timer.Delay = 1000;
        Timer.Start();
        _logger.Trace(correlationId, "Counter controller opened");
        return Task.CompletedTask;
    }
    public Task CloseAsync(string correlationId)
    {
        Timer.Stop();
        _logger.Trace(correlationId, "Counter controller closed");
        return Task.CompletedTask;
    }
    public async Task<object> ExecuteAsync(string correlationId, Parameters parameters)
    {
        _logger.Info(correlationId, "{0} - {1}", Counter++,
        Parameters.GetAsStringWithDefault("message", "Hello World!"));
        return await Task.FromResult(Counter);
    }
}

```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```go
type CounterController struct {
	logger     *clog.CompositeLogger
	timer      *crun.FixedRateTimer
	parameters *crun.Parameters
	counter    int
}

func NewCounterController() *CounterController {
	instance := &CounterController{
		logger:     clog.NewCompositeLogger(),
		timer:      crun.NewFixedRateTimer(),
		parameters: crun.NewEmptyParameters(),
		counter:    0,
	}

	instance.logger.SetLevel(clog.Debug)

	return instance
}

func (c *CounterController) SetReferences(ctx context.Context, references crefer.IReferences) {
	c.logger.SetReferences(ctx, references)
}

func (c *CounterController) IsOpen() bool {
	return c.timer.IsStarted()
}

func (c *CounterController) Open(ctx context.Context, correlationId string) error {
	if c.IsOpen() {
		return nil
	}

	c.timer.SetCallback(func(ctx context.Context) { c.Execute(correlationId, c.parameters) })
	c.timer.SetInterval(1000)
	c.timer.SetDelay(1000)
	c.timer.Start(context.Background())
	c.logger.Trace(context.Background(), correlationId, "Counter controller opened")

	return nil
}

func (c *CounterController) Close(ctx context.Context, correlationId string) error {
	c.timer.Stop(ctx)
	c.logger.Trace(context.Background(), correlationId, "Counter controller closed")

	return nil
}

func (c *CounterController) Execute(ctx context.Background(), correlationId string, args crun.Parameters) (result interface{}, err error) {
	return args.GetAsObject("message"), nil
}
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

```dart
import 'package:pip_services3_commons/pip_services3_commons.dart';
import 'package:pip_services3_components/pip_services3_components.dart';

class CounterController
    implements IReferenceable, IReconfigurable, IOpenable, IExecutable {
  final CompositeLogger _logger = CompositeLogger();
  final FixedRateTimer timer = FixedRateTimer();
  Parameters parameters = Parameters();
  int counter = 0;

  @override
  void configure(ConfigParams config) {
    parameters = Parameters.fromConfig(config);
  }

  @override
  void setReferences(IReferences references) {
    _logger.setReferences(references);
  }

  @override
  bool isOpen() {
    return timer.isStarted();
  }

  @override
  Future open(String? correlationId) async {
    timer.setCallback(() async {
      return await execute(correlationId, parameters);
    });
    timer.setInterval(1000);
    timer.setDelay(1000);
    timer.start();
    _logger.trace(correlationId, 'Counter controller opened');
  }

  @override
  Future close(String? correlationId) async {
    timer.stop();
    _logger.trace(correlationId, 'Counter controller closed');
  }

  @override
  Future<int> execute(String? correlationId, Parameters parameters) async {
    _logger.debug(correlationId, '%s - %s', [
      counter++,
      parameters.getAsStringWithDefault('message', 'Hello World!')
    ]);
    return counter;
  }
}
    
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

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

**TODO: add language**

{{< /tabsection >}}

### Utilities
The Pip.Service's Toolkit also includes a few utilities that can be used during microservice development:

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/node/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/node/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/node/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/node/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/node/commons/run/cleaner/) – cleans the current state of selected components.

For example:

```typescript
await Opener.open(correlationId, references.getAll());
...
await Closer.close(correlationId, references.getAll());
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/net/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/net/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/net/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/net/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/net/commons/run/cleaner/) – cleans the current state of selected components.


For example:

```cs
await Opener.OpenAsync(correlationId, _references.GetAll());
...
await Closer.CloseAsync(correlationId, _references.GetAll());
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/golang/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/golang/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/golang/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/golang/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/golang/commons/run/cleaner/) – cleans the current state of selected components.


For example:

```go
err := crun.Opener.Open(context.Background(), correlationId, references.GetAll())
// ...
err = crun.Closer.Close(context.Background(), correlationId, references.GetAll())
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/dart/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/dart/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/dart/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/dart/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/dart/commons/run/cleaner/) – cleans the current state of selected components.


For example:

```dart
await Opener.open(correlationId, references.getAll());
...
await Closer.close(correlationId, references.getAll());
```

{{< /tabsection >}}

{{< tabsection isMarkdown=true >}}

- [Opener](../../../toolkit_api/python/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../toolkit_api/python/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../toolkit_api/python/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../toolkit_api/python/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../toolkit_api/python/commons/run/cleaner/) – cleans the current state of selected components.


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


