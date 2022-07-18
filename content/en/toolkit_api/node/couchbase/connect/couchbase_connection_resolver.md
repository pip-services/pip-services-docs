---
type: docs
title: "CouchbaseConnectionResolver"
linkTitle: "CouchbaseConnectionResolver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-couchbase-nodex"
description: >
    Helper class that resolves Couchbase connection and credential parameters, validates them and generates a connection URI.

---

**Extends:** [CompositeConnectionResolver](../../../components/connect/composite_connection_resolver)

### Description
The CouchbaseConnectionResolver class is used to resolve Couchbase connections and credential parameters, validate them and generate connection URIs/

**Important points**

- It is able to process multiple connections to Couchbase cluster nodes.


#### Configuration parameters

- **connection(s)**:
    - **discovery_key**: (optional) key to retrieve the connection from [IDiscovery](../../../components/connect/idiscovery)
    - **host**: host name or IP address
    - **port**: port number (default: 27017)
    - **database**: database (bucket) name
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


#### resolve
Merges connection options with connection parameters. 
This method can be overriden in child classes.

> `public` resolve(correlationId: string): Promise<[CouchbaseConnectionParams](../couchbase_connection_params)>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise<[CouchbaseConnectionParams](../couchbase_connection_params)> - resolved URI.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../../commons/refer/ireferences)): void

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
