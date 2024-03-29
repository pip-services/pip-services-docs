---
type: docs
title: "Connect"
linkTitle: "Connect"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-mqysl-node"
description: >
    This package contains classes used to create connection components for MySQL databases.
---
---

<div class="module-body"> 

### Classes

#### [MySqlConnection](mysql_connection)
MySQL connection using plain driver.
By defining a connection and sharing it through multiple persistence components
you can reduce number of used database connections.


#### [MySqlConnectionResolver](mysql_connection_resolver)
Helper class that resolves MySQL connection and credential parameters,
validates them and generates a connection URI.
It is able to process multiple connections to MySQL cluster nodes.

</div>
