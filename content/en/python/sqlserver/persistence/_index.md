---
type: docs
title: "Persistence"
linkTitle: "Persistence"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-sqlserver-sqlserver-python"
description: >
    TODO: add description
---
---

<div class="module-body"> 

### Classes

#### [IdentifiableJsonSqlServerPersistence](identifiable_json_sqlserver_persistence)
Abstract persistence component that stores data in SQLServer in JSON or JSONB fields
and implements a number of CRUD operations over data items with unique ids.
The data items must implement [IIdentifiable](../../commons/data/iidentifiable) interface.


#### [IdentifiableSqlServerPersistence](identifiable_sqlserver_persistence)
Abstract persistence component that stores data in SQLServer
and implements a number of CRUD operations over data items with unique ids.
The data items must implement [IIdentifiable](../../commons/data/iidentifiable) interface. 

#### [SqlServerPersistence](sqlserver_persistence)
Abstract persistence component that stores data in SQLServer using plain driver.

This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing **self._db** or **self._collection** properties.

</div>