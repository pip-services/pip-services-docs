---
type: docs
title: "MongoDbConnectionResolver"
linkTitle: "MongoDbConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-mongodb-java"
description: >
    MongoDbConnectionResolver implementation.
    Helper class that resolves MongoDB connection
    and credential parameters, validates them and generates a connection URI.
  
---

**Implements:** [IReferenceable](../../../components/refer/ireferenceable), [IConfigurable](../../../components/config/iconfigurable)

### Description

The MongoDbConnectionResolver class allows you to create a MongoDB connection resolver that resolves MongoDB connection and credential parameters, validates them, and generates a connection URI.

Important points

-  It is able to process multiple connections to MongoDB cluster nodes.

#### Configuration parameters

**connection(s)**:
- **discovery_key**: (optional) key to retrieve the connection from IDiscovery
- **host**: host name or IP address
- **port**: port number (default: 27017)
- **database**: database name
- **uri**: resource URI or connection string with all parameters in it

**credential(s)**:
- **store_key**: (optional) key to retrieve the credentials from ICredentialStore
- **username**: username
- **password**: user's password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">

#### _connectionResolver
MongoDB connection resolver.
> `protected` [ConnectionResolver](../../../config/connect/connection_resolver) **_connectionResolver** = new [ConnectionResolver](../../../config/connect/connection_resolver)(); 

#### _credentialResolver
MongoDB credential resolver.
> `protected` [CredentialResolver](../../../config/auth/credential_resolver) **_credentialResolver** = new [CredentialResolver](../../../config/auth/credential_resolver)(); 

</span>


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config**: [ConfigParams](../../../components/config/config_params) - configuration parameters to be set.


#### resolve
Resolves a MongoDB connection URI from connection and credential parameters.

> `public` String resolve([IContext](../../../components/context/icontext) context) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: string - resolved URI

#### setReferences
Sets references to dependent components.

> `public` void setReferences([IReferences](../../../components/refer/ireferences) references)

- **references**: [IReferences](../../../components/refer/ireferences) - references to locate the component dependencies.
