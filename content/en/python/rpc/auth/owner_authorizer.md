---
type: docs
title: "OwnerAuthorizer"
linkTitle: "OwnerAuthorizer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    Access granting methods for owners and administrators.
---

### Description

The OwnerAuthorizer class provides access granting methods for owners and administrators.

### Instance methods

#### owner
Access is granted only for the session owner.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> owner(id_param: str = 'user_id')

- **id_param**: str - id of the current owner.

#### owner_or_admin
Access is granted only to authorized users.   
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized or not owner.

> owner_or_admin(id_param: str = 'user_id')

- **id_param**: str - id of the current owner.
