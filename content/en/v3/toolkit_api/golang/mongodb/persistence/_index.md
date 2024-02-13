---
type: docs
title: "Persistence"
linkTitle: "Persistence"
no_list: true
gitUrl: "https://github.com/pip-services3-gox/pip-services3-mongodb-gox"
description: >
    This package contains classes used to create MongoDB persistence components.
---
---

<div class="module-body"> 

### Types

#### [IdentifiableMongoDbPersistence](identifiable_mongodb_persistence)
Abstract persistence component that stores data in MongoDB
and implements a number of CRUD operations over data items with unique ids.
The data items must implement the [IIdentifiable](../../commons/data/iidentifiable) interface.

#### [MongoDbPersistence](mongodb_persistence)
Abstract persistence component that stores data in MongoDB using plain driverthe official driver.
This is the most basic persistence component that is only
able to store data items of any type. Specific CRUD operations
over the data items must be implemented in child classes by
accessing **c.Db** or **c.Collection** properties.

</div>
