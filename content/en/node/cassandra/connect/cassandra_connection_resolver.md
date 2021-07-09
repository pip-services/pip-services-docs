---
type: docs
title: "CassandraConnectionResolver"
linkTitle: "CassandraConnectionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-cassandra-nodex"
description: >
    Helper class that resolves Cassandra connection and credential parameters,
    validates them and generates a connection URI.

---

**Extends:** [CompositeConnectionResolver](../../../components/connect/composite_connection_resolver)

### Description
The CassandraConnectionResolver class is used to resolve Cassandra connections and credential parameters, validate them and generate connection URIs.

Important points

- It is able to process multiple connections to Cassandra cluster nodes.


#### Configuration parameters

- **connection(s)**:
	- **discovery_key**:               (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
	- **host**: host name or IP address
	- **port**: port number (default: 27017)
	- **database**: database name
	- **uri**: resource URI or connection string with all parameters in it
- **credential(s)**:
	- **store_key**: (optional) key to retrieve the credentials from [ICredentialStore](../../../components/auth/icredential_store)
	- **username**: username
	- **password**: user's password


#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../../../components/connect/idiscovery) services
- **\*:credential-store:\*:\*:1.0** - (optional) [ICredentialStore](../../../components/auth/icredential_store) stores to resolve credentials


### Fields

<span class="hide-title-link">

#### _connectionResolver
Connection resolver
> `protected` **_connectionResolver**: [ConnectionResolver](../../../components/connect/connection_resolver) 

#### _credentialResolver
Credential resolver
> `protected` **_credentialResolver**: [CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Constructors
Creates an instance of this class.
> `public` constructor()

### Instance methods


#### mergeConnection
Merges connection options with connection parameters
This method can be overriden in child classes.

> `protected` mergeConnection(options: [ConfigParams](../../../commons/config/config_params), connection: [ConnectionParams](../../../components/connect/connection_params)): [ConfigParams](../../../commons/config/config_params)

- **options**: [ConfigParams](../../../commons/config/config_params) - connection options
- **connection**: [ConnectionParams](../../../components/connect/connection_params) - connection parameters to be merged
- **returns**: [ConfigParams](../../../commons/config/config_params) - merged connection options.
