---
type: docs
title: "Persistence"
linkTitle: "Persistence"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-sqlserver-mysql-python"
description: >
    This package contains classes used to create persistence components used to store in MySQL databases. 
---
---

<div class="module-body"> 

### Classes

#### [IdentifiableJsonMySqlPersistence](identifiable_json_mysql_persistence)
Abstract persistence component that stores data in MySQL in JSON or JSONB fields
and implements a number of CRUD operations over data items with unique ids.
The data items must implement [IIdentifiable](../../commons/data/iidentifiable) interface.


#### [IdentifiableMySqlPersistence](identifiable_mysql_persistence)
Abstract persistence component that stores data in MySQL
and implements a number of CRUD operations over data items with unique ids.
The data items must implement [IIdentifiable](../../commons/data/iidentifiable) interface.

#### [MySqlPersistence](mysql_persistence)
Abstract persistence component that stores data in MySQL using the official driver.

This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in the child classes by
accessing **self._db** or **self._collection** properties.

</div>
