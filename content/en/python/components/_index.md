---
type: docs
title: "Components"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
no_list: true
description: > 
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

Install the Python package as
```bash
pip install pip-services3-components
```

Example how to use Logging and Performance counters.
Here we are going to use CompositeLogger and CompositeCounters components.
They will pass through calls to loggers and counters that are set in references.

```python
from pip_services3_commons.config import ConfigParams, IConfigurable
from pip_services3_commons.refer import IReferences, IReferenceable
from pip_services3_components.count import CompositeCounters
from pip_services3_components.log import CompositeLogger


class MyComponent(IConfigurable, IReferenceable):
    __logger = CompositeLogger()
    __counters = CompositeCounters()

    def configure(self, config):
        self.__logger.configure(config)

    def set_references(self, references):
        self.__logger.set_references(references)
        self.__counters.set_references(references)

    def my_method(self, correlation_id, param1):
        try:
            self.__logger.trace(correlation_id, "Executed method mycomponent.mymethod")
            self.__counters.increment("mycomponent.mymethod.exec_count", 1)
            timing = self.__counters.begin_timing("mycomponent.mymethod.exec_time")
            # ...
            timing.end_timing()
        except Exception as ex:
            self.__logger.error(correlation_id, ex, "Failed to execute mycomponent.mymethod")
            self.__counters.increment("mycomponent.mymethod.error_count", 1)
```

Example how to get connection parameters and credentials using resolvers.
The resolvers support "discovery_key" and "store_key" configuration parameters
to retrieve configuration from discovery services and credential stores respectively.

```python
from pip_services3_commons.config import ConfigParams, IConfigurable
from pip_services3_commons.refer import IReferences, IReferenceable
from pip_services3_commons.run import IOpenable
from pip_services3_components.auth import CredentialParams, CredentialResolver
from pip_services3_components.connect import ConnectionParams, ConnectionResolver


class MyComponent(IConfigurable, IReferenceable, IOpenable):
    __connection_resolver = ConnectionResolver()
    __credential_resolver = CredentialResolver()

    def configure(self, config):
        self.__connection_resolver.configure(config)
        self.__credential_resolver.configure(config)

    def set_references(self, references):
        self.__connection_resolver.set_references(references)
        self.__credential_resolver.set_references(references)

    # ...

    def open(self, correlation_id):
        connection = self.__connection_resolver.resolve(correlation_id)
        credential = self.__credential_resolver.lookup(correlation_id)

        host = connection.get_post()
        port = connection.get_port()
        user = credential.get_username()
        pas = credential.get_password()

    # ...


# Using the component
my_component = MyComponent()

my_component.configure(ConfigParams.from_tuples(
    'connection.host', 'localhost',
    'connection.port', 1234,
    'credential.username', 'anonymous',
    'credential.password', 'pass123'
))

my_component.open(None)
```

Example how to use caching and locking.
Here we assume that references are passed externally.

```python
from pip_services3_commons.refer import Descriptor, References, IReferences, IReferenceable
from pip_services3_components.cache import ICache, MemoryCache
from pip_services3_components.lock.ILock import ILock
from pip_services3_components.lock.MemoryLock import MemoryLock


class MyComponent(IReferenceable):
    __cache: ICache
    __lock: ILock

    def set_references(self, references: IReferences):
        self.__cache = references.get_one_required(Descriptor("*", "cache", "*", "*", "1.0"))
        self.__lock = references.get_one_required(Descriptor("*", "lock", "*", "*", "1.0"))

    def my_method(self, correlation_id, param1):
        # First check cache for result
        result = self.__cache.retrieve(correlation_id, 'mykey')

        # Lock..
        self.__lock.acquire_lock(correlation_id, "mykey", 1000, 1000, )

        # Do processing
        # ...

        # Store result to cache async
        self.__cache.store(correlation_id, 'mykey', result, 3600000)

        # Release lock async
        self.__lock.release_lock(correlation_id, 'mykey')

        return result


# Use the component
my_component = MyComponent()
my_component.set_references(References.from_tuples(
    Descriptor("pip-services", "cache", "memory", "default", "1.0"), MemoryCache(),
    Descriptor("pip-services", "lock", "memory", "default", "1.0"), MemoryLock(),
))

result = my_component.my_method(None, param1)
```

If you need to create components using their locators (descriptors) implement 
component factories similar to the example below.

```python
from pip_services3_commons.refer import Descriptor
from pip_services3_components.build import Factory


class MyFactory(Factory):
    my_component_descriptor = Descriptor("myservice", "mycomponent", "default", "*", "1.0")

    def __init__(self):
        super(MyFactory, self).__init__()

        self.register_as_type(MyFactory.my_component_descriptor, MyFactory)


# Using the factory
my_factory = MyFactory()
my_component1 = my_factory.create(Descriptor("myservice", "mycomponent", "default", "myComponent1", "1.0"))
my_component2 = my_factory.create(Descriptor("myservice", "mycomponent", "default", "myComponent2", "1.0"))

...
```

### Develop

For development you shall install the following prerequisites:
* Python 3.7+
* Visual Studio Code or another IDE of your choice
* Docker

Install dependencies:
```bash
pip install -r requirements.txt
```

Run automated tests:
```bash
python test.py
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

### Contacts

The initial implementation is done by **Sergey Seroukhov**.
