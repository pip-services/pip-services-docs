---
type: docs
title: "BasicAuthorizer"
linkTitle: "BasicAuthorizer"
gitUrl: "https://github.com/pip-services3-python/pip-services3-rpc-python"
description: >
    TODO add description
---

### Description

TODO add description

### Instance methods

#### anybody
Allows everyone access, even unauthorized users.
> anybody()

#### signed
Access is granted only to authorized users.  
Throws [UnauthorizedException](../../../commons/errors/unauthorized_exception) exception if not authorized.
> signed()
