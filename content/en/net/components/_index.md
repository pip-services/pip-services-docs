---
type: docs
title: "Components module"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-components-dotnet"
no_list: true
weight: 30
description: > 
    Component definitions for .NET


    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
    It contains standard component definitions that can be used to build applications and services.
---


### Packages

The module contains the following packages:

* [**Auth**](auth) - authentication credential stores
* [**Build**](build) - basic factories for constructing objects
* [**Cache**](cache) - distributed cache
* [**Config**](config) - configuration readers and managers, whose main task is to deliver configuration parameters to the application from wherever they are being stored
* [**Connect**](connect) - connection discovery and configuration services
* [**Count**](count) - performance counters
* [**Info**](info) - context info implementations that manage the saving of process information and sending additional parameter sets
* [**Lock**](lock) - distributed lock components
* [**Log**](log) - basic logging components that provide console and composite logging, as well as an interface for developing custom loggers
* [**Test**](test) - minimal set of test components to make testing easier
* [**Component**](component) - the root package



### Use

Install the dotnet package as
```bash
dotnet add package PipServices3.Components
```

Example how to use Logging and Performance counters.
Here we are going to use CompositeLogger and CompositeCounters components.
They will pass through calls to loggers and counters that are set in references.

```cs
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Components.Log;
using PipServices3.Components.Count;

class MyComponent : IConfigurable, IReferenceable
{
  private CompositeLogger _logger = new CompositeLogger();
  private CompositeCounters _counters = new CompositeCounters();

  public void Configure(ConfigParams config)
  {
    this._logger.Configure(config);
  }

  public void SetReferences(IReferences references)
  {
    this._logger.SetReferences(references);
    this._counters.SetReferences(references);
  }

  public void MyMethod(string correlationId)
  {
    try
      {
        this._logger.Trace(correlationId, "Executed method mycomponent.mymethod");
        this._counters.Increment("mycomponent.mymethod.exec_count", 1);
        Timing timing = this._counters.BeginTiming("mycomponent.mymethod.exec_time");
        ...
        timing.EndTiming();
      }
    catch (Exception ex)
    {
      this._logger.Error(correlationId, ex, "Failed to execute mycomponent.mymethod");
      this._counters.Increment("mycomponent.mymethod.error_count", 1);
      ...
    }
  }
}
```

Example how to get connection parameters and credentials using resolvers.
The resolvers support "discovery_key" and "store_key" configuration parameters
to retrieve configuration from discovery services and credential stores respectively.

```cs
using System.Threading.Tasks;
using PipServices3.Commons.Config;
using PipServices3.Commons.Refer;
using PipServices3.Commons.Run;
using PipServices3.Components.Connect;
using PipServices3.Components.Auth;


class MyComponent:IConfigurable, IReferenceable, IOpenable
{
  private ConnectionResolver _connectionResolver = new ConnectionResolver();
  private CredentialResolver _credentialResolver = new CredentialResolver();

  public void Configure(ConfigParams config)
  {
    this._connectionResolver.Configure(config);
    this._credentialResolver.Configure(config);
  }

  public void SetReferences(IReferences references)
  {
    this._connectionResolver.SetReferences(references);
    this._credentialResolver.SetReferences(references);
  }

  ...

  public Task OpenAsync(string correlationId)
  {
      Task task = Task.Factory.StartNew(async () =>
      {
          ConnectionParams _connectionParams = new ConnectionParams();

          ConnectionParams connection = await this._connectionResolver.ResolveAsync(correlationId);
          CredentialParams credential = await this._credentialResolver.LookupAsync(correlationId);

          string host = connection.Host;
          int port = connection.Port;
          string username = credential.Username;
          string password = credential.Password;

          ...
      });

      return task;
  }
}

// Using the component
MyComponent myComponent = new MyComponent();

myComponent.Configure(ConfigParams.FromTuples(
    "connection.host", "localhost",
    "connection.port", 1234,
    "credential.username", "anonymous",
    "credential.password", "pass123"
));

myComponent.OpenAsync(null);
```

Example how to use caching and locking.
Here we assume that references are passed externally.

```cs
using PipServices3.Commons.Refer;
using PipServices3.Components.Lock;
using PipServices3.Components.Cache;


class MyComponent: IReferenceable
{
  private ICache _cache;
  private Lock _lock;
        
  public void SetReferences(IReferences references)
  {
    this._cache = references.GetOneRequired<ICache>(new Descriptor("*", "cache", "*", "*", "1.0"));
    this._lock = references.GetOneRequired<Lock>(new Descriptor("*", "lock", "*", "*", "1.0"));
  }

  public async void MyMethod(string correlationId) 
  {
    // First check cache for result
    string result = await this._cache.RetrieveAsync<string>(correlationId, "mykey");

    // Lock..
    this._lock.AcquireLock(correlationId, "mykey", 1000, 1000);

    // Do processing
    ...

    // Store result to cache async
    this._cache.StoreAsync<string>(correlationId, "mykey", result, 3600000);

    // Release lock async
    this._lock.ReleaseLock(correlationId, "mykey");
  }
}

// Use the component
MyComponent myComponent = new MyComponent();

myComponent.SetReferences(References.FromTuples(
  new Descriptor("pip-services", "cache", "memory", "default", "1.0"), new MemoryCache(),
  new Descriptor("pip-services", "lock", "memory", "default", "1.0"), new MemoryLock()
));

myComponent.MyMethod(null);
```

If you need to create components using their locators (descriptors) implement 
component factories similar to the example below.

```cs
using PipServices3.Components.Build;
using PipServices3.Commons.Refer;


class MyFactory : Factory
{
    public static Descriptor myComponentDescriptor = new Descriptor("myservice", "mycomponent", "default", "*", "1.0");

    public MyFactory() : base()
    {
        this.RegisterAsType(MyFactory.myComponentDescriptor, MyComponent);
    }
}

// Using the factory
MyFactory myFactory = new MyFactory();

MyComponent myComponent1 = myFactory.Create(new Descriptor("myservice", "mycomponent", "default", "myComponent1", "1.0");
MyComponent myComponent2 = myFactory.Create(new Descriptor("myservice", "mycomponent", "default", "myComponent2", "1.0");

...
```