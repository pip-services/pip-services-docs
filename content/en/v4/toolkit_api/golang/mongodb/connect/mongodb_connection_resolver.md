---
type: docs
title: "MongoDbConnectionResolver"
linkTitle: "MongoDbConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/blob/main/pip-services4-mongodb-go"
description: >
    MongoDbConnectionResolver implementation.
    Helper class that resolves MongoDB connection
    and credential parameters, validates them and generates a connection URI.
  
---

### Description

The MongoDbConnectionResolver class allows you to create a MongoDB connection resolver that resolves MongoDB connection and credential parameters, validates them, and generates a connection URI.

Important points

-  It is able to process multiple connections to MongoDB cluster nodes.

#### Configuration parameters

- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from IDiscovery
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **database**: database name
    - **uri**: resource URI or connection string with all parameters in it

- **credential(s)**:
    - **store_key**: (optional) key to retrieve the credentials from ICredentialStore
    - **username**: username
    - **password**: user's password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials

### Constructors

#### NewMongoDbConnectionResolver
NewMongoDbConnectionResolver creates new connection resolver

> NewMongoDbConnectionResolver() [*MongoDbConnectionResolver]()

### Fields

<span class="hide-title-link">

#### ConnectionResolver
MongoDB connection resolver.
> **ConnectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### _credential_resolver
MongoDB credential resolver.
> **CredentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Methods

#### Configure
Configures the component by passing its configuration parameters.

> (c [*MongoDbConnectionResolver]()) Configure(ctx context.Context,config [*cconf.ConfigParams](../../../components/config/config_params))

- **ctx**: context.Context - operation context.
- **config**: [*cconf.ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### Resolve
Resolves a MongoDB connection URI from connection and credential parameters.

> (c [*MongoDbConnectionResolver]()) Resolve(ctx context.Context, context [IContext](../../../components/context/icontext)) (uri string, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (uri string, err error) - resolved URI

#### SetReferences
Sets references to dependent components.

> (c [*MongoDbConnectionResolver]()) SetReferences(ctx context.Context, references [crefer.IReferences](../../../components/refer/ireferences))

- **ctx**: context.Context - operation context.
- **references**: [crefer.IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.

