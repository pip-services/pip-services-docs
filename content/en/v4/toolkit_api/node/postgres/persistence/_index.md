---
type: docs
title: "Persistence"
linkTitle: "Persistence"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-postgres-node"
description: >
    This package contains classes used to create PostgreSQL persistence components.
---
---

<div class="module-body"> 

### Classes

#### [IdentifiableJsonPostgresPersistence](identifiable_json_postgres_persistence)
Abstract persistence component that stores data in PostgreSQL in JSON or JSONB fields
and implements a number of CRUD operations over data items with unique ids.
The data items must implement the [IIdentifiable](../../data/data/iidentifiable) interface.


#### [IdentifiablePostgresPersistence](identifiable_postgres_persistence)
Abstract persistence component that stores data in PostgreSQL
and implements a number of CRUD operations over data items with unique ids.
The data items must implement the [IIdentifiable](../../data/data/iidentifiable) interface.

#### [PostgresPersistence](postgres_persistence)
Abstract persistence component that stores data in PostgreSQL using the official driver.

This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing **this._db** or **this._collection** properties.

</div>
