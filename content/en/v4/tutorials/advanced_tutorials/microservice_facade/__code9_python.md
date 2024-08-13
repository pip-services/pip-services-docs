
```python
# -*- coding: utf-8 -*-
import datetime
from copy import deepcopy

from pip_services4_components.config.ConfigParams import ConfigParams
from pip_services4_components.refer.Descriptor import Descriptor
from pip_services4_container.refer.ManagedReferences import ManagedReferences
from pip_services4_http.build.DefaultRpcFactory import DefaultRpcFactory

from pip_facades_sample_python.build.ClientFacadeFactory import ClientFacadeFactory
from pip_facades_sample_python.clients.version1.AccountV1 import AccountV1
from pip_facades_sample_python.clients.version1.AccountsMemoryClientV1 import AccountsMemoryClientV1
from pip_facades_sample_python.clients.version1.EmailSettingsMemoryClientV1 import EmailSettingsMemoryClientV1
from pip_facades_sample_python.clients.version1.IAccountsClientV1 import IAccountsClientV1
from pip_facades_sample_python.clients.version1.IRolesClientV1 import IRolesClientV1
from pip_facades_sample_python.clients.version1.ISessionsClientV1 import ISessionsClientV1
from pip_facades_sample_python.clients.version1.ISitesClientV1 import ISitesClientV1
from pip_facades_sample_python.clients.version1.PasswordsNullClientV1 import PasswordsNullClientV1
from pip_facades_sample_python.clients.version1.RolesMemoryClientV1 import RolesMemoryClientV1
from pip_facades_sample_python.clients.version1.SessionsMemoryClientV1 import SessionsMemoryClientV1
from pip_facades_sample_python.clients.version1.SiteV1 import SiteV1
from pip_facades_sample_python.clients.version1.SitesMemoryClientV1 import SitesMemoryClientV1
from pip_facades_sample_python.controllers.version1.FacadeControllerV1 import FacadeControllerV1
from pip_facades_sample_python.controllers.version2.FacadeControllerV2 import FacadeControllerV2
from test.fixtures.TestSites import TestSites
from test.fixtures.TestUsers import TestUsers


class ReferencesTest(ManagedReferences):

    def __init__(self):
        super(ReferencesTest, self).__init__()
        self._factory = ClientFacadeFactory()

        self.__append_dependencies()
        self.__configure_controller()
        self.__create_user_and_sessions()

    def __append_dependencies(self):
        # Add factories
        self.put(None, ClientFacadeFactory())
        self.put(None, DefaultRpcFactory())

        # Add controller
        self.put(None, FacadeControllerV1())
        self.put(None, FacadeControllerV2())

        # Add controllers
        self.put(Descriptor('pip-services-accounts', 'client', 'memory', 'default', '*'), AccountsMemoryClientV1())
        self.put(Descriptor('pip-services-sessions', 'client', 'memory', 'default', '*'), SessionsMemoryClientV1())
        self.put(Descriptor('pip-services-passwords', 'client', 'null', 'default', '*'), PasswordsNullClientV1())
        self.put(Descriptor('pip-services-roles', 'client', 'memory', 'default', '*'), RolesMemoryClientV1())
        self.put(Descriptor('pip-services-emailsettings', 'client', 'memory', 'default', '*'),
                 EmailSettingsMemoryClientV1())
        self.put(Descriptor('pip-services-sites', 'client', 'direct', 'memory', '*'), SitesMemoryClientV1())

    def __configure_controller(self):
        # Configure Facade controller
        controller = self.get_one_required(Descriptor('pip-services', 'endpoint', 'http', 'default', '*'))

        controller.configure(ConfigParams.from_tuples(
            'root_path', '',  # '/api/v1',
            'connection.protocol', 'http',
            'connection.host', 'localhost',
            'connection.port', 3000
        ))

    def __create_user_and_sessions(self):
        # Create accounts
        accounts_client: IAccountsClientV1 = self.get_one_required(
            Descriptor('pip-services-accounts', 'client', '*', '*', '*'))

        admin_user_account = AccountV1(
            id=TestUsers.AdminUserId,
            login=TestUsers.AdminUserLogin,
            name=TestUsers.AdminUserName,
            active=True,
            create_time=datetime.datetime.now()
        )

        accounts_client.create_account(None, admin_user_account)

        user_1_account = AccountV1(
            id=TestUsers.User1Id,
            login=TestUsers.User1Login,
            name=TestUsers.User1Name,
            active=True,
            create_time=datetime.datetime.now()

        )

        accounts_client.create_account(None, user_1_account)

        user_2_account = AccountV1(
            id=TestUsers.User2Id,
            login=TestUsers.User2Login,
            name=TestUsers.User2Name,
            active=True,
            create_time=datetime.datetime.now()

        )

        accounts_client.create_account(None, user_2_account)

        # Create test site(s)
        sites_client: ISitesClientV1 = self.get_one_required(Descriptor('pip-services-sites', 'client', '*', '*', '*'))

        site1 = SiteV1(
            id=TestSites.Site1Id,
            name=TestSites.Site1Name
        )
        sites_client.create_site(None, site1)

        # Create user roles
        roles_client: IRolesClientV1 = self.get_one_required(Descriptor('pip-services-roles', 'client', '*', '*', '*'))

        roles_client.set_roles(None, TestUsers.AdminUserId, ['admin', TestSites.Site1Id + ':admin'])
        roles_client.set_roles(None, TestUsers.User1Id, [TestSites.Site1Id + ':manager'])
        roles_client.set_roles(None, TestUsers.User2Id, [TestSites.Site1Id + ':user'])

        # Create opened sessions
        sessions_client: ISessionsClientV1 = self.get_one_required(
            Descriptor('pip-services-sessions', 'client', '*', '*', '*'))

        admin_user_data = deepcopy(admin_user_account)
        admin_user_data.roles = ['admin', TestSites.Site1Id + ':admin']
        sessions_client.open_session(None, TestUsers.AdminUserId, TestUsers.AdminUserName,
                                     None, None, admin_user_data, None).id = TestUsers.AdminUserSessionId

        user_1_data = deepcopy(user_1_account)
        user_1_data.roles = [TestSites.Site1Id + ':manager']
        sessions_client.open_session(None, TestUsers.User1Id, TestUsers.User1Name,
                                     None, None, user_1_data, None, ).id = TestUsers.User1SessionId

        user_2_data = deepcopy(user_2_account)
        user_2_data.roles = [TestSites.Site1Id + ':manager']
        sessions_client.open_session(None, TestUsers.User2Id, TestUsers.User2Name,
                                     None, None, user_2_data, None, ).id = TestUsers.User2SessionId

```
