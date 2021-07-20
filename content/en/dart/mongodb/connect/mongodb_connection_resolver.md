---
type: docs
title: "MongoDbConnectionResolver"
linkTitle: "MongoDbConnectionResolver"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-mongodb-dart"
description: >
    MongoDbConnectionResolver implementation.
    Helper class that resolves MongoDB connection
    and credential parameters, validates them and generates a connection URI.
  
---

**Implements:** [IReferenceable](../../../commons/refer/ireferenceable), [IConfigurable](../../../commons/config/iconfigurable)

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
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) credential stores to resolve credentials


### Fields

<span class="hide-title-link">

#### connectionResolver
MongoDB connection resolver.
> **connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### credentialResolver
MongoDB credential resolver.
> **credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Instance methods

#### configure
Configures the component by passing its configuration parameters.

`@override`
> void configure(ConfigParams config)

- **config**: [ConfigParams](../../../commons/config/config_params) - configuration parameters to be set.


#### resolve
Resolves a MongoDB connection URI from connection and credential parameters.

> Future\<String\> resolve(String correlationId)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **returns**: Future\<String\> - resolved URI

#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../../commons/refer/ireferences) references)

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component dependencies.
