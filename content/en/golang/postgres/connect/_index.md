---
type: docs
title: "Connect"
linkTitle: "Connect"
no_list: true
gitUrl: "https://github.com/pip-services3-go/pip-services3-postgres-go"
description: >
   This package contains classes used to create connection components for PostgreSQL databases.
---
---

<div class="module-body"> 

### Types

#### [PostgresConnection](postgres_connection)
PostgreSQL connection using the official driver.
By defining a connection and sharing it through multiple persistence components
you can reduce the number of used database connections.

#### [PostgresConnectionResolver](postgres_connection_resolver)
Helper class that resolves PostgreSQL connection and credential parameters,
validates them and generates a connection URI. 
It is able to process multiple connections to PostgreSQL cluster nodes.

</div>
