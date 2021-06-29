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

- [IConfigurable](../../commons/config/iconfigurable/) – component configuration.
- [IReferenceable](../../commons/refer/ireferenceable/) and [IUnreferenceable](../../commons/refer/iunreferenceable/) – setting and destroying references to other components.
- [IOpenable](../../commons/run/iopenable) and [IClosable](../..//commons/run/iclosable) – starting and stopping internal functional processes.
- [IExecutable](../../commons/run/iexecutable) – execution of functional processes.
- [INotifiable](../../commons/run/inotifiable) - sending event notifications.

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

### Implementation

Microservice developers are free to implement just the interfaces needed by their components. When the container is started, all implemented methods will be called in the previously mentioned order. 
For example: 

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
### Utilities
The Pip.Service’s Toolkit also includes a few utilities that can be used during microservice development:
- [Opener](../../commons/run/opener/) – initiates the functional processes of selected components.
- [Closer](../../commons/run/closer/) – stops the functional processes of selected components.
- [Executor](../../commons/run/executor/) – runs the functional processes of selected components.
- [Notifier](../../commons/run/notifier/) - sends event notifications for selected components.
- [Cleaner](../../commons/run/cleaner/) – cleans the current state of selected components.


For example:

```cs
await Opener.OpenAsync(correlationId, _references.GetAll());
...
await Closer.CloseAsync(correlationId, _references.GetAll());
```
