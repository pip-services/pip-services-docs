---
type: docs
title: "Connect"
linkTitle: "Connect"
no_list: true
gitUrl: "https://github.com/pip-services3-dart/pip-services3-mongodb-dart"
description: >
    This package contains classes used to create connections to MongoDBs.
---
---

<div class="module-body"> 

### Classes

#### [MongoDbConnection](mongodb_connection)
MongoDB connection using the official driver.
By defining a connection and sharing it through multiple persistence components
you can reduce the number of used database connections.


#### [MongoDbConnectionResolver](mongodb_connection_resolver)
Helper class that resolves MongoDB connection and credential parameters,
validates them and generates a connection URI.
It is able to process multiple connections to MongoDB cluster nodes.

<br>

</div>
