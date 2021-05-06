---
type: docs
title: "Connect"
linkTitle: "Connect"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Todo: Rewrite the description.


    Contains implementation of connection parameters, using various connection strings, 
    which are stripped of all credentials. If we need to configure a service, the port, 
    ip address, protocol, and other parameters – we use the ConnectionParams object, and 
    relevant helper classes (like [[ConnectionResolver]]), for acquiring these parameters, 
    and for discovery of objects, components (which store and retrieve connection parameters). 

    #### Discovery

    Service that store a registry of various end-points (what services are where, and how to 
    connect to them). It knows the end-points, but doesn't have the credentials to connect to them. 
    Separated for security reasons. 


    [IDiscovery](../idiscovery) - interface for creating registries.   
    [MemoryDiscovery](../memory_discovery) - registry that is stored in memory.  

    There exist 2 types of discovery: 

    - Static discovery: all services have static IP addresses (like DNS, which also works using static 
    discovery) that are configured from the start and don't change along the way. As of lately, used 
    more often than dynamic, because it is simpler to use and more reliable.  

    - Proxy (or reverse proxy) is created with a dns name, and all the dynamics of 
    starting/restarting/switching from one host to another – everything is nice and clear 
    for the clients. Infrastructure does all the hard work out of the box. 

    - Configure sets the static registry.  


    - Dynamic discovery: every time a service starts, it registers its address in the discovery 
    service ("Service name" at the following address "IP"). Clients then ask to resolve the address 
    by which the requested service can be reached. The service has a general name, by which other 
    services can resolve it.  

    - If a service stops working, you need to refresh its address, clean stale addresses, 
    heartbeats must be used – lots of problems and challenges.
    
    
    One service can have more than one address. 
---
---

<div class="module-body"> 

### Interfaces

#### [IDiscovery](idiscovery)
Interface for discovery services which are used to store and resolve connection parameters
to connect to external services.

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

If connections are configured to be retrieved from [IDiscovery](idiscovery),
it automatically locates [IDiscovery](idiscovery) in component references
and retrieve connections from there using discovery_key parameter.

#### [ConnectionUtils](connection_utils)
A set of utility functions to process connection parameters

#### [DefaultDiscoveryFactory](default_discovery_factory)
Creates [IDiscovery](idiscovery) components by their descriptors.

#### [MemoryDiscovery](memory_discovery)
Discovery service that keeps connections in memory.


</div>
