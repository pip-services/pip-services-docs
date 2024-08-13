
```python
# -*- coding: utf-8 -*-
from typing import List

import bottle
from pip_services4_commons.convert import JsonConverter
from pip_services4_commons.errors import UnauthorizedException
from pip_services4_http.auth.BasicAuthorizer import BasicAuthorizer
from pip_services4_http.auth.OwnerAuthorizer import OwnerAuthorizer
from pip_services4_http.auth.RoleAuthorizer import RoleAuthorizer


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
