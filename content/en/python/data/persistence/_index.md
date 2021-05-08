---
type: docs
title: "Persistence"
linkTitle: "Persistence"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Todo: Rewrite this description.

    Contains various persistence implementations (InMemory and File –persistences). These are 
    "abstract" persistences, which only connect to data sources and do not implement the operations 
    and methods for working the data. The classes that extend these persistences must implement this 
    logic on their own.  


    Identifiable Persistences work with Identifiable objects, which have primary keys. A few standard 
    operations are defined by default for these objects: reading arrays and data pages; searching for 
    an object by its id; and creating, updating, and deleting records of objects. 
---
---

<div class="module-body"> 

### Classes

#### [FilePersistence](file_persistence)
Abstract persistence component that stores data in flat files
and caches them in memory.

This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing this._items property and calling [save](file_persistence/#save) method.

#### [IdentifiableFilePersistence](identifiable_file_persistence)
Abstract persistence component that stores data in flat files
and implements a number of CRUD operations over data items with unique ids.
The data items must implement [IIdentifiable interface][IIdentifiable](../../commons/data/iidentifiable)

#### [IdentifiableMemoryPersistence](identifiable_memory_persistence)
Abstract persistence component that stores data in memory
and implements a number of CRUD operations over data items with unique ids.
The data items must implement [IIdentifiable interface][IIdentifiable](../../commons/data/iidentifiable)

#### [JsonFilePersister](json_file_persister)
Persistence component that loads and saves data from/to flat file.
It is used by [FilePersistence](file_persistence), but can be useful on its own.

#### [MemoryPersistence](memory_persistence)
Abstract persistence component that stores data in memory.

This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing **self._items** property and calling [save](memory_persistence/#save) method.

</div>
