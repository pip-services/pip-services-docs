---
type: docs
title: "Persistence"
linkTitle: "Persistence"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-mysql-dart"
description: >
    This package contains classes used to create MySQL persistence components.
    
---
---

<div class="module-body"> 

### Classes

#### [IdentifiableJsonMySqlPersistence](identifiable_json_mysql_persistence)
Abstract persistence component that stores data in MySQL in JSON or JSONB fields
and implements a number of CRUD operations over data items with unique ids.
The data items must implement the [IIdentifiable](../../data/data/iidentifiable) interface.


#### [IdentifiableMySqlPersistence](identifiable_mysql_persistence)
Abstract persistence component that stores data in MySQL
and implements a number of CRUD operations over data items with unique ids.
The data items must implement the [IIdentifiable](../../data/data/iidentifiable) interface.

#### [MySqlPersistence](mysql_persistence)
Abstract persistence component that stores data in MySQL using the official driver.

This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in the child classes by
accessing **this._db** or **this._collection** properties.

</div>

