---
type: docs
title: "Config"
linkTitle: "Config"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    Container configuration serves as a recipe for instantiating and 
    configuring components inside the container.  


    External configurations (stored as YAML or JSON) are passed to the container 
    and define the structure of objects that need to be recreated in the container. 
    Objects can be defined in two ways:

    - using descriptors (using which registered factories can recreate the object) 
    
    - using hard-coded types (objects are recreated directly, based on their type, bypassing 
    factories). 


    In addition, various configurations are stored for each object. The container recreates the 
    objects and, if they implement the IConfigurable interface, passes them their configurations. 
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
