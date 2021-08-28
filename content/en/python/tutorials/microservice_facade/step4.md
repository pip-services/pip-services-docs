---
type: docs
no_list: true
title: "Step 5. Authorization"
linkTitle: "Step 5. Authorization" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-python"
---

Once we’ve established who our user is, we need to implement some way of controlling what operations our user can perform, based on the rights he/she has been assigned. In this tutorial, we will be taking a look at how to install access limitations that are based on user roles. The roles themselves are stored in the Roles microservice and are loaded into a UserSession by the loadSession interceptor we discussed in the previous step.

Our Authorizer class was made to provide flexible access management. We will be using this class to limit access to certain operations in our facade’s RESTful services. This class’s implementation can be found in the **Authorize.py** file, located in the folder **services/version1**. Its code is as follows:

**/pip_facades_sample_python/services/version1/Authorize.py**

```python
# -*- coding: utf-8 -*-
from typing import List

import bottle
from pip_services3_commons.convert import JsonConverter
from pip_services3_commons.errors import UnauthorizedException
from pip_services3_rpc.auth.BasicAuthorizer import BasicAuthorizer
from pip_services3_rpc.auth.OwnerAuthorizer import OwnerAuthorizer
from pip_services3_rpc.auth.RoleAuthorizer import RoleAuthorizer


class AuthorizerV1:

    def __init__(self):
        self.__basic_auth = BasicAuthorizer()
        self.__role_auth = RoleAuthorizer()
        self.__owner_auth = OwnerAuthorizer()

    # Anybody who entered the system
    def anybody(self):
        return self.__basic_auth.anybody()

    # Only registered and authenticated users
    def signed(self):
        return self.__basic_auth.signed()

    # Only the user session owner
    def owner(self, id_param: str = 'user_id'):
        return self.__owner_auth.owner(id_param)

    def owner_or_admin(self, id_param: str = 'user_id'):
        return self.__owner_auth.owner_or_admin(id_param)

    def site_roles(self, roles: List[str], id_param: str = 'site_id'):
        def inner():
            user = getattr(bottle.request, 'user', None)

            if user is None:
                raise UnauthorizedException(
                    None, 'NOT_SIGNED',
                    'User must be signed in to perform this operation'
                ).with_status(401)

            else:
                user.roles = getattr(user, 'roles', False) or []
                site_id = bottle.request.params['kwargs'].get(id_param)
                authorized = 'admin' in user.roles
                if site_id is not None and not authorized:
                    for role in roles:
                        authorized = authorized or (site_id + ':' + role) in user.roles

                if not authorized:
                    raise UnauthorizedException(
                        None, 'NOT_IN_SITE_ROLE',
                        'User must be site:' + ' or site:'.join(roles) + ' to perform this operation'
                    ).with_details('roles', roles).with_status(403)

        return inner

    def admin(self):
        return self.__role_auth.user_in_role('admin')

    def site_admin(self, id_param: str = 'site_id'):
        return self.site_roles(['admin'], id_param)

    def site_manager(self, id_param: str = 'site_id'):
        return self.site_roles(['admin', 'manager'], id_param)

    def site_user(self, id_param: str = 'site_id'):
        return self.site_roles(['admin', 'manager', 'user'], id_param)

    def site_admin_or_owner(self, user_id_param: str = 'user_id', site_id_param: str = 'site_id'):
        def inner():
            user = bottle.request.user
            if user is None:
                raise UnauthorizedException(
                    None, 'NOT_SIGNED',
                    'User must be signed in to perform this operation'
                ).with_status(401)

            else:
                user_id = dict(bottle.request.query.decode()).get(user_id_param) or JsonConverter.to_json(
                    bottle.request.json)
                if user_id is not None and user_id == user.user_id:
                    return
                else:
                    site_id = bottle.request.params.get(site_id_param)
                    authorized = 'admin' in user.roles or site_id + ':admin' in user.roles
                    if not authorized:
                        raise UnauthorizedException(
                            None, 'NOT_IN_SITE_ROLE',
                            'User must be site:admin to perform this operation'
                        ).with_details('roles', ['admin']).with_status(403)

        return inner

```

Let’s take a closer look at each of these methods:


- anybody - allows everyone access, even unauthorized users.
- signed - access is granted only to authorized users.
- admin - access is granted only to users with the Administrator role.
- owner - access is granted only for the session owner.


The logic pretty much boils down to making a decision about whether we should allow further access, or send an answer with the corresponding error. In case of the latter, the error is based on the information provided by the clients and the information about the user that is embedded into the interceptor’s request for the active session.


Setting specific access levels to certain resources is configured when registering routes in the service. The service’s implementation is described in [Step 6 - REST services and versioning](../step5).

<span class="hide-title-link">

### [Step 6 - REST services and versioning](../step5)

</span>
