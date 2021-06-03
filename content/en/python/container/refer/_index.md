---
type: docs
title: "Refer"
linkTitle: "Refer"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-container-python"
description: >

    This package contains classes used to create reference decorators and managed references.      
        
    Important points
    
    - It provides the inversion of control design pattern but does not contain the fully functional container (you can just only create a class that will set various references).    
    - Lifecycle:    
       - Once the objects of a container are configured, if they implement the [IReferencable](../../commons/refer/ireferencable) interface, they are passed a set of references for recreating links between objects in the container. If the objects implement the [IOpenable interface](../../commons/run/iopenable), the *open()* method is called and they 
    start to work. 
    
       - Connections to various services are made, after which the objects start, the container starts running, and the objects carry out their tasks. 
    
       - When the container starts to close, the objects that implement the [IClosable interface](../../commons/run/iclosable) are closed via their *close()* method (which should make them stop working and disconnect from other services), after which objects that implement the [IUnreferenceable interface](../../commons/refer/iunreferenceable) delete various links between objects, and, finally, the container destroys all objects and turns off. 
    
    - [Build](build_references_decorator), [Link](link_references_decorator), and [Run](run_references_decorator) - ReferenceDecorators are used during the corresponding  building, linking, and running stages and are united in [ManagedReferences](managed_references), which are extended by [ContainerReferences](container_references).
---
---

<div class="module-body"> 

### Classes

#### [BuildReferencesDecorator](build_references_decorator)
References decorator that automatically creates missing components using
available component factories upon component retrival.

#### [LinkReferencesDecorator](link_references_decorator)
References decorator that automatically sets references to newly added components

#### [ManagedReferences](managed_references)
Managed references that in addition to keeping and locating references can also 
manage their lifecycle:
- Auto-creation of missing component using available factories
- Auto-linking newly added components
- Auto-opening newly added components
- Auto-closing removed components

#### [ReferencesDecorator](references_decorator)
Chainable decorator for IReferences that allows to inject additional capabilities
such as automatic component creation, automatic registration and opening.

#### [RunReferencesDecorator](run_references_decorator)
References decorator that automatically opens to newly added components

</div>
