---
type: docs
title: "Random"
linkTitle: "Random"
no_list: true
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Todo: Rewrite this description.  

    Contains implementation of random value generators that are used for 
    functional as well as non-functional testing. Used to generate random 
    objects and fill databases with unique objects. 
---
---

<div class="module-body"> 

### Interfaces

#### [IConfigurable](iconfigurable)
An interface to set configuration parameters to an object. 
It can be added to any existing class by implementing a single **configure()** method.
If you need to emphasis the fact that **configure()** method can be called multiple times
to change object configuration in runtime, use [IReconfigurable](ireconfigurable) interface instead.

#### [IReconfigurable](ireconfigurable)
An interface to set configuration parameters to an object.  
It is similar to [IConfigurable](iconfigurable) interface, but emphasises the fact
that **configure()** method can be called more than once to change object configuration
in runtime.

<br>

### Classes

#### [ConfigParams](config_params)
Contains a key-value map with configuration parameters. 
All values stored as strings and can be serialized as JSON or string forms.
When retrieved the values can be automatically converted on read using GetAsXXX methods.

#### [NameResolver](name_resolver)
A helper class that allows to extract component name from configuration parameters.
The name can be defined in "id", "name" parameters or inside a component descriptor.

#### [OptionResolver](option_resolver)
A helper class to parameters from "options" configuration section.

</div>