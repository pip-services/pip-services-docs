---
type: docs
title: "Connect"
linkTitle: "Connect"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-config-node"
description: >
    

    This package contains interfaces and classes used to define connection parameters
    
    
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

#### [HttpConnectionResolver](http_connection_resolver)
Helper class to retrieve connections for HTTP-based services and clients.

In addition to regular functions of ConnectionResolver, this class is able to parse http://URIs
and validate connection parameters before returning them.

#### [MemoryDiscovery](memory_discovery)
Discovery service that keeps connections in memory.


</div>

