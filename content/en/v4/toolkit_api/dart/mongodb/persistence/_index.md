---
type: docs
title: "Persistence"
linkTitle: "Persistence"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-mongodb-dart"
description: >
    This package contains classes used to create MongoDB persistence components.
---
---

<div class="module-body"> 

### Classes

#### [IdentifiableMongoDbPersistence](identifiable_mongodb_persistence)
Abstract persistence component that stores data in MongoDB
and implements a number of CRUD operations over data items with unique ids.
The data items must implement the [IIdentifiable](../../data/data/iidentifiable) interface.

#### [MongoDbIndex](mongodb_index)
Index definition for MongoDB.

#### [MongoDbPersistence](mongodb_persistence)
Abstract persistence component that stores data in MongoDB using the official driver.
This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing **this._db** or **this._collection** properties.

</div>

