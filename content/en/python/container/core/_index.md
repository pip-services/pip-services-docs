---
type: docs
title: "Core"
linkTitle: "Core"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Todo: Rewrite the description.
    
    
    Contains implementation of the inversion of control container, which creates objects 
    and controls their lifecycle(*) using various configurations. 


    Using generic containers, we can create more specialized containers – one of which is the process 
    container. It represents a system process, receives its configuration file via the command line, 
    and creates a container, starts it, reads its configuration, recreates objects, runs them, and then, 
    after pressing ctrl-c, turns off and destroys the objects.  


    Another example of containers are lambda functions, service fabric containers, and so on. 

    ### (*) Compont lifecycle:

    External configurations (stored as YAML or JSON) are passed to the container 
    and define the structure of objects that need to be recreated in the container. 
    Objects can be defined in two ways: 

    - using descriptors (using which registered factories can recreate the object) 

    - using hard-coded types (objects are recreated directly, based on their type, bypassing 
    factories). 


    In addition, various configurations are stored for each object. The container recreates the 
    objects and, if they implement the IConfigurable interface, passes them their configurations. 


    Once the objects of a container are configured, if they implement the [IReferencable interface](../../commons/refer/ireferencable), 
    they are passed a set of references for recreating links between objects in the container. If 
    objects implement the [IOpenable interface](../../commons/run/iopenable), 
    the **open()** method is called and they 
    start to work. Connections to various services are made, after which the objects start, the 
    container starts running, and the objects carry out their tasks. When the container 
    starts to close, the objects that implement the [IClosable interface](../../commons/run/iclosable) 
    are closed via their 
    **close()** method (which should make them stop working and disconnect from other services), 
    after which objects that implement the [IUnreferenceable interface](../../commons/refer/iunreferenceable) delete various links between 
    objects, and, finally, the contains destroys all objects and turns off. 
---
---

<div class="module-body"> 

### Classes

#### [Container](container)
Inversion of control (IoC) container that creates components and manages their lifecycle.

The container is driven by configuration, that usually stored in JSON or YAML file.
The configuration contains a list of components identified by type or locator, followed
by component configuration.

#### [ProcessContainer](process_container)
Inversion of control (IoC) container that runs as a system process.
It processes command line arguments and handles unhandled exceptions and Ctrl-C signal
to gracefully shutdown the container.

</div>
