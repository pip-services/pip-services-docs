---
type: docs
title: "Components module"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
no_list: true
weight: 30
description: > 
    Component definitions for Pip.Services in Node.js / ES2017.  


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

Install the NPM package as
```bash
npm install pip-services3-components-nodex --save
```

Example how to use Logging and Performance counters.
Here we are going to use CompositeLogger and CompositeCounters components.
They will pass through calls to loggers and counters that are set in references.

```typescript
import { ConfigParams } from 'pip-services3-commons-nodex'; 
import { IConfigurable } from 'pip-services3-commons-nodex'; 
import { IReferences } from 'pip-services3-commons-nodex'; 
import { IReferenceable } from 'pip-services3-commons-nodex'; 
import { CompositeLogger } from 'pip-services3-components-nodex'; 
import { CompositeCounters } from 'pip-services3-components-nodex'; 

export class MyComponent implements IConfigurable, IReferenceable {
  private _logger: CompositeLogger = new CompositeLogger();
  private _counters: CompositeCounters = new CompositeCounters();
  
  public configure(config: ConfigParams): void {
    this._logger.configure(config);
  }
  
  public setReferences(refs: IReferences): void {
    this._logger.setReferences(refs);
    this._counters.setReferences(refs);
  }
  
  public async myMethod(correlationId: string, param1: any): Promise<void> {
    this._logger.trace(correlationId, "Executed method mycomponent.mymethod");
    this._counters.increment("mycomponent.mymethod.exec_count", 1);
    let timing = this._counters.beginTiming("mycomponent.mymethod.exec_time");
    try {
      ....
    } finally {
      timing.endTiming();
    } catch (err) {
      if (err) {
        this._logger.error(correlationId, err, "Failed to execute mycomponent.mymethod");
        this._counters.increment("mycomponent.mymethod.error_count", 1);
      }
    }
    ...
  }
}
```

Example how to get connection parameters and credentials using resolvers.
The resolvers support "discovery_key" and "store_key" configuration parameters
to retrieve configuration from discovery services and credential stores respectively.

```typescript
import { ConfigParams } from 'pip-services3-commons-nodex'; 
import { IConfigurable } from 'pip-services3-commons-nodex'; 
import { IReferences } from 'pip-services3-commons-nodex'; 
import { IReferenceable } from 'pip-services3-commons-nodex'; 
import { IOpenable } from 'pip-services3-commons-nodex'; 
import { ConnectionParams } from 'pip-services3-components-nodex'; 
import { ConnectionResolver } from 'pip-services3-components-nodex'; 
import { CredentialParams } from 'pip-services3-components-nodex'; 
import { CredentialResolver } from 'pip-services3-components-nodex'; 

export class MyComponent implements IConfigurable, IReferenceable, IOpenable {
  private _connectionResolver: ConnectionResolver = new ConnectionResolver();
  private _credentialResolver: CredentialResolver = new CredentialResolver();
  
  public configure(config: ConfigParams): void {
    this._connectionResolver.configure(config);
    this._credentialResolver.configure(config);
  }
  
  public setReferences(refs: IReferences): void {
    this._connectionResolver.setReferences(refs);
    this._credentialResolver.setReferences(refs);
  }
  
  ...
  
  public async open(correlationId: string): Promise<void> {
    let connection = await this._connectionResolver.resolve(correlationId);
    let credential = await this._credentialResolver.lookup(correlationId);

    let host = connection.getHost();
    let port = connection.getPort();
    let user = credential.getUsername();
    let pass = credential.getPassword();
  }
}

// Using the component
let myComponent = new MyComponent();

myComponent.configure(ConfigParams.fromTuples(
  'connection.host', 'localhost',
  'connection.port', 1234,
  'credential.username', 'anonymous',
  'credential.password', 'pass123'
));

await myComponent.open(null);
```

Example how to use caching and locking.
Here we assume that references are passed externally.

```typescript
import { Descriptor } from 'pip-services3-commons-nodex'; 
import { References } from 'pip-services3-commons-nodex'; 
import { IReferences } from 'pip-services3-commons-nodex'; 
import { IReferenceable } from 'pip-services3-commons-nodex'; 
import { ILock } from 'pip-services3-components-nodex'; 
import { MemoryLock } from 'pip-services3-components-nodex'; 
import { ICache } from 'pip-services3-components-nodex'; 
import { MemoryCache } from 'pip-services3-components-nodex'; 

export class MyComponent implements IReferenceable {
  private _cache: ICache;
  private _lock: ILock;
  
  public setReferences(refs: IReferences): void {
    this._cache = refs.getOneRequired<ICache>(new Descriptor("*", "cache", "*", "*", "1.0"));
    this._lock = refs.getOneRequired<ILock>(new Descriptor("*", "lock", "*", "*", "1.0"));
  }
  
  public async myMethod(correlationId: string, param1: any): Promise<any> {
    // First check cache for result
    result := await this._cache.retrieve(correlationId, "mykey");
    if (result != null) {
      return result;
    }
      
    // Lock..
    await this._lock.acquireLock(correlationId, "mykey", 1000, 1000);
    
    // Do processing
    ...
    
    // Store result to cache async
    this._cache.store(correlationId, "mykey", result, 3600000);

    // Release lock async
    this._lock.releaseLock(correlationId, "mykey");

    return result;
  }
}

// Use the component
let myComponent = new MyComponent();

myComponent.setReferences(References.fromTuples(
  new Descriptor("pip-services", "cache", "memory", "default", "1.0"), new MemoryCache(),
  new Descriptor("pip-services", "lock", "memory", "default", "1.0"), new MemoryLock(),
);

result := await myComponent.myMethod(null);
```

If you need to create components using their locators (descriptors) implement 
component factories similar to the example below.

```typescript
import { Factory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

export class MyFactory extends Factory {
  public static myComponentDescriptor: Descriptor = new Descriptor("myservice", "mycomponent", "default", "*", "1.0");
  
  public MyFactory() {
    super();
    
    this.registerAsType(MyFactory.myComponentDescriptor, MyComponent);    
  }
}

// Using the factory

let myFactory = MyFactory();

let myComponent1 = myFactory.create(new Descriptor("myservice", "mycomponent", "default", "myComponent1", "1.0");
let myComponent2 = myFactory.create(new Descriptor("myservice", "mycomponent", "default", "myComponent2", "1.0");

...
```