---
type: docs
no_list: true
title: "Component Lifecycle"
linkTitle: "Component Lifecycle"
weight: 30
---

- by Alex Mazur

### Component lifecycle

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

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>


<div class="content-tab-section">

- [IConfigurable](../../../node/commons/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../node/commons/refer/ireferenceable/) and [IUnreferenceable](../../../node/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../node/commons/run/iopenable) and [IClosable](../../../node/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../node/commons/run/iexecutable) – execution of functional processes.
- [INotifiable](../../../node/commons/run/inotifiable) - sending event notifications.

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

</div>

<div class="content-tab-section">

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

</div>


<div class="content-tab-section">

- [IConfigurable](../../../go/commons/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../go/commons/refer/ireferenceable/) and [IUnreferenceable](../../../go/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../go/commons/run/iopenable) and [IClosable](../../../go/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../go/commons/run/iexecutable) – execution of functional processes.
- [INotifiable](../../../go/commons/run/inotifiable) - sending event notifications.

```go

type IConfigurable interface {
	Configure(config *ConfigParams)
}

type IReferenceable interface {
	SetReferences(references IReferences)
}

type IOpenable interface {
	IClosable

	IsOpen() bool

	Open(correlationId string) error
}


type IClosable interface {
	Close(correlationId string) error
}


type IExecutable interface {
	Execute(correlationId string, args *Parameters) (result interface{}, err error)
}

```

</div>

<div class="content-tab-section">

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
  Future open(String correlationId);
}

abstract class IClosable {
    Future close(String correlationId);
}

abstract class IExecutable {
   Future<dynamic> execute(String correlationId, Parameters args);
}
```

</div>

<div class="content-tab-section">

- [IConfigurable](../../../python/commons/config/iconfigurable/) – component configuration.
- [IReferenceable](../../../python/commons/refer/ireferenceable/) and [IUnreferenceable](../../../python/commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../../python/commons/run/iopenable) and [IClosable](../../../python/commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../../python/commons/run/iexecutable) – execution of functional processes.
- [INotifiable](../../../python/commons/run/inotifiable) - sending event notifications.

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

</div>

<div class="content-tab-section">

**TODO: add language**

</div>

</div>

### Implementation

Microservice developers are free to implement just the interfaces needed by their components. When the container is started, all implemented methods will be called in the previously mentioned order. 
For example: 

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">

```typescript
import { ConfigParams, FixedRateTimer, Parameters } from "pip-services3-commons-nodex";
import { IReconfigurable, IReferenceable, IExecutable, IOpenable, IReferences } from "pip-services3-commons-nodex";
import { CompositeLogger, LogLevel } from "pip-services3-components-nodex";

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

    public async open(correlationId: string): Promise<void> {
        if (this.isOpen()) {
            return;
        }

        this.timer.setCallback(() => this.execute(correlationId, this.parameters))
        this.timer.setInterval(1000)
        this.timer.setDelay(1000)
        this.timer.start()
        this.logger.trace(correlationId, "Counter controller opened")

    }
        
    public async close(correlationId: string): Promise<void> {
        this.timer.stop()
        this.logger.trace(correlationId, "Counter controller closed")
    }
        

    public execute(correlationId: string, args: Parameters): Promise<any> {
        this.counter += 1;

        this.logger.info(
            correlationId,
            this.counter + " - " + this.parameters.getAsStringWithDefault('message', 'Hello World!')
        )

        let result = args.getAsObject("message");
        return result;
    }
}

```

</div>

<div class="content-tab-section">

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

</div>

<div class="content-tab-section">

**TODO: add CounterController**

</div>

<div class="content-tab-section">

```dart
class CounterController implements IReferenceable, IReconfigurable, IOpenable, IExecutable
{
  final CompositeLogger _logger = new CompositeLogger();
  final FixedRateTimer timer = new FixedRateTimer();
  final Parameters parameters  = new Parameters();
  int counter  = 0;
  void configure(config ConfigParams )
  {
    parameters = Parameters.fromConfig(config);
  }
  public void setReferences(references IReferences)
  {
    _logger.setReferences(references);
  }
  public bool IsOpen()
  {
    return timer.isStarted;
  }
  Future open(correlationId String) async
  {
    timer.task = () async {return await Execute(correlationId, parameters)};
    timer.interval = 1000;
    timer.delay = 1000;
    timer.start();
    _logger.trace(correlationId, "Counter controller opened");
  }
  Future close(correlationId String)
  {
    timer.stop();
    _logger.trace(correlationId, "Counter controller closed");
  }
  Future<int> Execute(correlationId String, parameters Parameters ) async
  {
    _logger.info(correlationId, "$s - $s", counter++, 
    parameters.getAsStringWithDefault("message", "Hello World!"));
    return counter;
  }
}
    
```

</div>

<div class="content-tab-section">

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

</div>

<div class="content-tab-section">

**TODO: add language**

</div>

</div>

### Utilities
The Pip.Service’s Toolkit also includes a few utilities that can be used during microservice development:

<div class="content-tab-selector">
	<div class="btn-group tab-selector-btn-group" role="group" aria-label="Language selector">
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Node</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">.NET</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Golang</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Dart</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Python</button>
	  <button type="button" class="btn btn-outline-secondary lang-select-btn">Java</button>
	</div>

<div class="content-tab-section">

- [Opener](../../../node/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../node/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../node/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../node/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../node/commons/run/cleaner/) – cleans the current state of selected components.

For example:

```typescript
await Opener.open(correlationId, references.getAll());
...
await Closer.close(correlationId, references.getAll());
```

</div>

<div class="content-tab-section">

- [Opener](../../../net/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../net/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../net/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../net/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../net/commons/run/cleaner/) – cleans the current state of selected components.


For example:

```cs
await Opener.OpenAsync(correlationId, _references.GetAll());
...
await Closer.CloseAsync(correlationId, _references.GetAll());
```

</div>

<div class="content-tab-section">

- [Opener](../../../go/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../go/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../go/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../go/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../go/commons/run/cleaner/) – cleans the current state of selected components.


For example:

```go
TODO: add example
```

</div>

<div class="content-tab-section">

- [Opener](../../../dart/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../dart/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../dart/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../dart/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../dart/commons/run/cleaner/) – cleans the current state of selected components.


For example:

```dart
await Opener.open(correlationId, references.getAll());
...
await Closer.close(correlationId, references.getAll());
```

</div>

<div class="content-tab-section">

- [Opener](../../../python/commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../../python/commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../../python/commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../../python/commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../../python/commons/run/cleaner/) – cleans the current state of selected components.


For example:

```python
Opener.open(correlation_id, _references.get_all())
...
Closer.close(correlation_id, _references.get_all())
```

</div>

<div class="content-tab-section">

**TODO: add language**

</div>

</div>


