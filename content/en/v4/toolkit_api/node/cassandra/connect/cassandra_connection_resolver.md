---
type: docs
title: "CassandraConnectionResolver"
linkTitle: "CassandraConnectionResolver"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-cassandra-node"
description: >
    Helper class that resolves Cassandra connection and credential parameters,
    validates them and generates a connection URI.

---

**Extends:** [CompositeConnectionResolver](../../../config/connect/composite_connection_resolver)

### Description
The CassandraConnectionResolver class is used to resolve Cassandra connections and credential parameters, validate them and generate connection URIs.

**Important points**

- It is able to process multiple connections to Cassandra cluster nodes.


#### Configuration parameters

- **connection(s)**:
	- **discovery_key**:               (optional) key to retrieve the connection from [IDiscovery](../../../config/connect/idiscovery)
	- **host**: host name or IP address
	- **port**: port number (default: 27017)
	- **database**: database name
	- **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
	- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../config/auth/icredential_store)
	- **username**: username
	- **password**: user's password


#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../config/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../config/auth/icredential_store) stores to resolve credentials


### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../config/connect/connection_resolver) 

#### _credentialResolver
Credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../config/auth/credential_resolver) 

</span>


### Constructors
Creates an instance of this class.
> `public` constructor()

### Instance methods


#### mergeConnection
Merges connection options with connection parameters
This method can be overriden in child classes.

> `protected` mergeConnection(options: [ConfigParams](../../../components/config/config_params), connection: [ConnectionParams](../../../config/connect/connection_params)): [ConfigParams](../../../components/config/config_params)

- **options**: [ConfigParams](../../../components/config/config_params) - connection options
- **connection**: [ConnectionParams](../../../config/connect/connection_params) - connection parameters to be merged
- **returns**: [ConfigParams](../../../components/config/config_params) - merged connection options.
