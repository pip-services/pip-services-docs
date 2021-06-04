---
type: docs
title: "Containers"
linkTitle: "Containers"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >
    
    This package contains the Container class, which provides an inversion of control container that creates objects 
    and controls their lifecycle using various configurations.     
           
    In addition, it contains the ProcessContainer class, which represents a system process. It receives its configuration file via the command line, 
    and creates a container, starts it, reads its configuration, recreates objects, and runs them.  
    After pressing ctrl-c, the process container turns off and destroys the objects.  
  

---
---

<div class="module-body"> 

### Lifecycle <BR/>

1 . Configuration    
    
External configurations (stored as YAML or JSON) are passed to the container and define the structure of objects that need to be recreated in the container.     
Objects can be defined in two ways: 
  - using descriptors (using which registered factories can recreate the object) 
  - using hard-coded types (objects are recreated directly, based on their type, bypassing 
    factories). 

Each object can store various configurations.  
<BR/>
2. Object creation    
   
Then,the container recreates the objects and, if they implement the IConfigurable interface, passes them their configurations. 

Once the objects of a container are configured, if they implement the [IReferencable interface](../../commons/refer/ireferencable), they are passed a set of references for recreating links between objects in the container. If the objects implement the [IOpenable interface](../../commons/run/iopenable), the **open()** method is called and they   start to work.    
<BR/>
3 . Start    
   
The container creates all connections to the different services and the objects and the container start running.
Then, the objects carry out their tasks.
<BR/>   
4. Closing   
   
When the container starts to close, the objects that implement the [IClosable interface](../../commons/run/iclosable) are closed via their **close()** method (which should make them stop working and disconnect from other services).     
After this, those objects that implement the [IUnreferenceable interface](../../commons/refer/iunreferenceable) delete various links between objects.    
Finally, the contains destroys all objects and turns off.     
<BR/>       
     
    
### Classes

#### [Container](container)
Inversion of control (IoC) container that creates components and manages their lifecycle.

The container is driven by configuration, that is usually stored in a JSON or YAML file.
The configuration contains a list of components identified by type or locator, followed
by the component's configuration.

#### [ProcessContainer](process_container)
Inversion of control (IoC) container that runs as a system process.
It processes command line arguments, and handles unhandled exceptions and Ctrl-C signals
in order to shutdown the container properly.

</div>
