---
type: docs
title: "CompositeConnectionResolver!"
linkTitle: "CompositeConnectionResolver!"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    **TODO: this module is not implemented**


    Helper class that resolves connection and credential parameters,
    validates them and generates connection options.
---

**Implements**: [IConfigurable](../../../commons/config/iconfigurable), [IReferenceable](../../../commons/refer/ireferenceable)

### Description

The CompositeConnectionResolver class allows you to resolve connection and credential parameters, validate them and generate connection options.

#### Configuration parameters

**connection(s)**:
  - **discovery_key**: (optional) a key to retrieve the connection from [IDiscovery](../idiscovery)
  - **protocol**: communication protocol
  - **host**: host name or IP address
  - **port**: port number
  - **uri**: resource URI or connection string with all parameters in it
  
**credential(s)**:
  - **store_key**: (optional) a key to retrieve the credentials from [ICredentialStore](../../auth/icredential_store)
  - **username**: user name
  - **password**: user password

#### References
- **\*:discovery:\*:\*:1.0** - (optional) [IDiscovery](../idiscovery) services to resolve connections
- **\*:credential-store:\*:\*:1.0** - (optional) Credential stores to resolve credentials [ICredentialStore](../../auth/icredential_store)