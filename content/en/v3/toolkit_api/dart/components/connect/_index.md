---
type: docs
title: "Connect"
linkTitle: "Connect"
no_list: true
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    

    This package contains interfaces and classes used to define connection parameters.
    
    
---
---

**Important points**

- A Discovery is a service that stores a registry of various end-points.  
- There are two types of discovery: 
   - Static discovery: all services have static IP addresses that are configured from the start and don't change along the way. As of lately, it is used more often than dynamic, because it is simpler to use and more reliable.  
   - Dynamic discovery: every time a service starts, it registers its address in the discovery service. Clients then ask to resolve the address by which the requested service can be reached. The service has a general name, by which other services can resolve it.  

<div class="module-body"> 

<br>

### Interfaces

#### [IDiscovery](idiscovery)
Interface for discovery services which are used to store and resolve connection parameters
to connect to external services.

<br>

### Classes

#### [CompositeConnectionResolver](composite_connection_resolver)
Helper class that resolves connection and credential parameters,
validates them and generates connection options.

#### [ConnectionParams](connection_params)
Contains connection parameters to connect to external services.
They are used together with credential parameters, but usually stored
separately from more protected sensitive values.

#### [ConnectionResolver](connection_resolver)
Helper class to retrieve component connections.

#### [ConnectionUtils](connection_utils)
A set of utility functions to process connection parameters

#### [DefaultDiscoveryFactory](default_discovery_factory)
Creates [IDiscovery](idiscovery) components by their descriptors.

#### [MemoryDiscovery](memory_discovery)
Discovery service that keeps connections in memory.


</div>
