---
type: docs
no_list: true
title: "Step 5. Services and versioning"
linkTitle: "Step 5. Services" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-python"
---
A facade’s RESTful operations are implemented by REST services, which receive external requests and delegate their execution to operations.

To process requests made to the API’s first version, let’s create a file named **FacadeServiceV1.py** in the **services/version1** folder with the following code:

**/pip_facades_sample_python/services/version1/FacadeServiceV1.py**

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
            user = None if not hasattr(bottle.request, 'user') else bottle.request.user
            user.roles = user.roles or []

            if user is None:
                raise UnauthorizedException(
                    None, 'NOT_SIGNED',
                    'User must be signed in to perform this operation'
                ).with_status(401)

            else:
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

The FacadeServiceV1 component extends the standard RestService, which implements the majority of the component’s basic functionality. All that we have left to do is define some routes and delegate their processing to the operations we defined in the previous steps.


A base route is defined in the constructor, which contains the API version that is implemented in the service.


In the **register** method, before we register our routes, we make sure to register the **load_session** interceptor, which will be loading user sessions using the parameters set in the REST requests.


Next, the routes are registered, access limits are set up using our Authorizer, and request handlers are defined using the business methods we implemented in our REST operation sets. For the sake of convenience, the registration functions are divided into 2 groups, each of which belongs to a specific operation-component.


When implementing a new version of the API, the following must be done:


1. Implement new REST operations or modify a copy of the existing ones;
2. Create a new FacadeServiceVx and set a new “/api/vx” base route;
3. Register routes for the new API and delegate their processing to the newly added and to already existing REST operations.

Continue on to [Step 6 - Testing Operations](../step6) to see how we can automate the testing of the service and operations we’ve created, including the authentication and authorization of requests.

<span class="hide-title-link">

### [Step 6 - Testing Operations](../step6)

</span>
