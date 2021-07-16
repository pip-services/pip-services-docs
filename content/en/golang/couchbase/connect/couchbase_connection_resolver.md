---
type: docs
title: "CouchbaseConnectionResolver"
linkTitle: "CouchbaseConnectionResolver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-couchbase-go"
description: >
    Helper class that resolves a Couchbase connection and credential parameters, validates them and generates a connection URI.

---

### Description
The CouchbaseConnectionResolver class is used to resolve Couchbase connections and credential parameters, validate them and generate connection URIs.

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

#### ConnectionResolver
Connection resolver
>  **ConnectionResolver**: [*ConnectionResolver](../../../components/connect/connection_resolver) 

#### CredentialResolver
Credential resolver
>  **CredentialResolver**: [*CredentialResolver](../../../components/auth/credential_resolver) 

</span>


### Constructors

#### NewCouchbaseConnectionResolver
Creates an instance of this class.
> NewCouchbaseConnectionResolver() [*CouchbaseConnectionResolver]()

### Instance methods


#### resolve
Merges connection options with connection parameters. 
This method can be overriden in child classes.

> (c [*CouchbaseConnectionResolver]()) Resolve(correlationId string) (connection [*CouchbaseConnectionParams](../couchbase_connection_params), err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (connection [*CouchbaseConnectionParams](../couchbase_connection_params), err error) - resolved URI.


#### setReferences
Sets references to dependent components.

> (c [*CouchbaseConnectionResolver]()) SetReferences(references [IReferences](../../../commons/refer/ireferences))

- **references**: [IReferences](../../../commons/refer/ireferences) - references to locate the component's dependencies.
