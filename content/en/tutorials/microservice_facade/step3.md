---
type: docs
no_list: true
title: "Step 4. Authentication and sessions"
linkTitle: "Step 4. Authentication and sessions" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-python"
---

In most cases, access to an application’s (service’s) resources is granted only after users authenticate themselves in the system. Authentication is the process of checking the validity of the identifier provided by a user. A successful authentication (besides establishing a trusted relationship and generating a session key) is usually also followed up by user authorization. This second step grants the user access rights to an approved set of resources, deemed necessary for the user to perform his/her tasks.

Just like in the previous step, we’ll be placing the files of this step in the **operation/version1** folder.

Let’s start by defining a data model for storing user information within a session. Create a new file named **SessionUserV1.py** with the following code:

**pip_facades_sample_python/operations/version1/SessionUserV1.py**

```python
# -*- coding: utf-8 -*-
import datetime
from typing import List, Any


class SessionUserV1:
    def __init__(self, id: str = None, login: str = None, name: str = None, create_time: str = None,
                 time_zone: str = None, language: str = None,
                 theme: str = None, roles: List[str] = None, change_pwd_time: datetime.datetime = None,
                 sites: List[dict] = None, settings: Any = None, custom_hdr: Any = None,
                 custom_dat: Any = None):

        # Identification
        self.id = id
        self.login = login
        self.name = name
        self.create_time = create_time

        # User information
        self.time_zone = time_zone
        self.language = language
        self.theme = theme

        # Security info
        self.roles = roles
        self.change_pwd_time = change_pwd_time
        self.sites = sites
        self.settings = settings

        # Custom fields
        self.custom_hdr = custom_hdr
        self.custom_dat = custom_dat

```

This data model will contain all necessary information about the user: the session’s ID, login, username, list of rolls, etc.

We’ll be defining our operations for managing sessions and authenticating users in a file named **SessionOperationsV1.py**. A listing of this file’s code is presented below:

**pip_facades_sample_python/operations/version1/SessionOperationsV1.py**

```python
# -*- coding: utf-8 -*-
from typing import List

import bottle
from pip_services3_commons.convert import JsonConverter, TypeCode
from pip_services3_commons.data import DataPage
from pip_services3_commons.refer import Descriptor, IReferences
from pip_services3_rpc.services import RestOperations

from pip_facades_sample_python.clients.version1.IRolesClientV1 import IRolesClientV1
from pip_facades_sample_python.clients.version1.ISessionsClientV1 import ISessionsClientV1
from pip_facades_sample_python.clients.version1.ISitesClientV1 import ISitesClientV1
from pip_facades_sample_python.clients.version1.SiteV1 import SiteV1


class SitesOperationsV1(RestOperations):

    def __init__(self):
        super().__init__()

        self.__roles_client: IRolesClientV1 = None
        self.__sessions_client: ISessionsClientV1 = None
        self.__sites_client: ISitesClientV1 = None

        self._dependency_resolver.put('roles', Descriptor('pip-services-roles', 'client', '*', '*', '1.0'))
        self._dependency_resolver.put('sessions', Descriptor('pip-services-sessions', 'client', '*', '*', '1.0'))
        self._dependency_resolver.put('sites', Descriptor('nov-services-sites', 'client', '*', '*', '1.0'))

    def set_references(self, references: IReferences):
        super().set_references(references)

        self.__roles_client = self._dependency_resolver.get_one_required('roles')
        self.__sessions_client = self._dependency_resolver.get_one_required('sessions')
        self.__sites_client = self._dependency_resolver.get_one_required('sites')

    def get_sites(self):
        filter_params = self._get_filter_params()
        paging = self._get_paging_params()

        result = self.__sites_client.get_sites(None, filter_params, paging)
        return self._send_result(result)

    def get_authorized_sites(self):
        filter_params = self._get_filter_params()
        paging = self._get_paging_params()

        roles: List[str] = [] if not bottle.request.user else bottle.request.user.roles or []
        site_ids: List[str] = []

        # Get authorized site ids
        for role in roles:
            tokens = role.split(':')
            if len(tokens) == 2:
                site_ids.append(tokens[0])

        # Consider ids parameter
        old_site_ids = filter_params.get('ids')
        if old_site_ids:
            site_ids = list(set(old_site_ids).intersection(set(site_ids)))

        # Is user has no sites then exit
        if len(site_ids) == 0:
            return self._send_result(DataPage([]))

        filter_params.set_as_object('ids', site_ids)

        result = self.__sites_client.get_sites(None, filter_params, paging)
        return self._send_result(result)

    def get_site(self, site_id):
        site = self.__sites_client.get_site_by_id(None, site_id)
        return self._send_result(site)

    def find_site_by_code(self):
        code = dict(bottle.request.query.decode()).get('code')

        site = self.__sites_client.get_site_by_code(None, code)
        return self._send_result(site)

    def generate_code(self, site_id):
        code = self.__sites_client.generate_code(None, site_id)
        return self._send_result(code)

    def create_site(self):
        try:
            data = bottle.request.json if isinstance(bottle.request.json,
                                                     dict) else JsonConverter.from_json(TypeCode.Map,
                                                                                        bottle.request.json)
            site: SiteV1 = SiteV1(**data)

            # Create a site
            site = self.__sites_client.create_site(None, site)

            # Assign permissions to the owner
            if self.__roles_client is not None and hasattr(bottle.request,
                                                           'user') and bottle.request.user.id is not None:
                self.__roles_client.grant_roles(None, bottle.request.user.id, [site.id + ':admin'])

            # Update current user session
            if hasattr(bottle.request, 'user') and hasattr(bottle.request, 'session_id'):
                user = bottle.request.user
                user.roles = user.roles or []
                user.roles.append(site.id + ':admin')

                user.sites = user.sites or []
                user.sites.append(site)

                self.__sessions_client.update_session_user(None, bottle.request.session_id, user)

            return self._send_result(site)

        except Exception as err:
            return self._send_error(err)

    def update_site(self, site_id):
        try:
            data = bottle.request.json if isinstance(bottle.request.json,
                                                     dict) else JsonConverter.from_json(TypeCode.Map,
                                                                                        bottle.request.json)
            data['id'] = site_id
            site: SiteV1 = SiteV1(**data)

            # Update site
            site = self.__sites_client.update_site(None, site)

            # Update current user session
            if hasattr(bottle.request, 'user') is not None and hasattr(bottle.request, 'session_id') is not None:
                user = bottle.request.user

                user.sites = user.sites or []
                user.sites = list(filter(lambda x: x.id == site.id, user.sites))
                user.sites.append(site)

                self.__sessions_client.update_session_user(None, bottle.request.session_id, user)

            return self._send_result(site)
        except Exception as err:
            self._send_error(err)

    def delete_site(self, site_id):
        site = self.__sites_client.delete_site_by_id(None, site_id)
        return self._send_deleted_result(site)

    def remove_site(self, site_id):
        try:
            # Assign permissions to the owner
            if self.__roles_client is not None and hasattr(bottle.request,
                                                           'user') and bottle.request.user.id is not None:
                self.__roles_client.revoke_roles(
                    None,
                    bottle.request.user.id,
                    [
                        site_id + ':admin',
                        site_id + ':manager',
                        site_id + ':user'
                    ]
                )
            # Update current user session
            if bottle.request.user is not None and bottle.request.session_id is not None:
                user = bottle.request.user

                user.roles = user.roles or []
                user.roles = list(filter(lambda x: x != site_id + ':admin', user.roles))
                user.roles = list(filter(lambda x: x != site_id + ':manager', user.roles))
                user.roles = list(filter(lambda x: x != site_id + ':user', user.roles))

                user.sites = user.sites or []
                user.sites = list(filter(lambda x: x.id != site_id, user.sites))

                self.__sessions_client.update_session_user(None, bottle.request.session_id, user)
                return self._send_empty_result()
        except Exception as err:
            return self._send_error(err)

    def validate_site_code(self):
        code = dict(bottle.request.query.decode()).get('code')

        site = self.__sites_client.get_site_by_code(None, code)

        if site:
            return self._send_result(site.id)

        return self._send_result()

```

This class contains the main operations for managing sessions, which allow us to load existing sessions, create new sessions, close existing sessions, and also authenticate users. This class depends on four microservices - Accounts, Passwords, Roles, and Sessions - each of which is responsible for a certain part of the class’s logic.


The **signup** and **signin** methods perform registration of new users and authentication of existing ones, respectively. Upon successful registration or authorization, the handlers of these operations open a new session as the finishing step of these methods.


The **signout** method closes sessions when users leave the system, or automatically when the session expires.


The **load_session** interceptor checks a session’s validity, and whether or not it even exists. The interceptor checks the request’s header for a session ID and, if one is found, uses it to retrieve data about the session from the Sessions microservice. If the session is expired or incorrect, an error will be returned. If everything’s all right, information about the user and the session are extracted and attached to the request, and a “green light” is given for further processing.


To perform these operations, our microservice needs to be able to interact with the microservices it depends on. This communication is made simple using standard clients, the links to which are set in the setReferences method.


The authorization mechanism will be responsible for limiting access to resources, depending on the roles a user has been assigned. This part’s implementation will be discussed in [Step 5 - Authorization](../step4).

<span class="hide-title-link">

### [Step 5. Authorization](../step4)

</span>
