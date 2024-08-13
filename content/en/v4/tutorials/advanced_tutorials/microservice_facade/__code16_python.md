
**/pip_facades_sample_python/build/ClientFacadeFactory.py**

```python
# -*- coding: utf-8 -*-

from pip_services4_components.refer import Descriptor
from pip_services4_components.build import Factory

from pip_facades_sample_python.clients.version1.AccountsMemoryClientV1 import AccountsMemoryClientV1
from pip_facades_sample_python.clients.version1.BeaconsMemoryClientV1 import BeaconsMemoryClientV1
from pip_facades_sample_python.clients.version1.EmailSettingsMemoryClientV1 import EmailSettingsMemoryClientV1
from pip_facades_sample_python.clients.version1.InvitationsNullClientV1 import InvitationsNullClientV1
from pip_facades_sample_python.clients.version1.PasswordsNullClientV1 import PasswordsNullClientV1
from pip_facades_sample_python.clients.version1.RolesMemoryClientV1 import RolesMemoryClientV1
from pip_facades_sample_python.clients.version1.SessionsMemoryClientV1 import SessionsMemoryClientV1
from pip_facades_sample_python.clients.version1.SettingsNullClientV1 import SettingsNullClientV1
from pip_facades_sample_python.clients.version1.SitesMemoryClientV1 import SitesMemoryClientV1


class ClientFacadeFactory(Factory):
    SettingsNullClientV1Descriptor = Descriptor("pip-services-settings", "client", "null", "*", "1.0")
    AccountsMemoryClientV1Descriptor = Descriptor("pip-services-accounts", "client", "memory", "*", "1.0")
    PasswordNullClientV1Descriptor = Descriptor("pip-services-passwords", "client", "null", "*", "1.0")
    RolesMemoryClientV1Descriptor = Descriptor("pip-services-roles", "client", "memory", "*", "1.0")
    SessionsMemoryClientV1Descriptor = Descriptor("pip-services-sessions", "client", "memory", "*", "1.0")
    EmailSettingsMemoryClientV1Descriptor = Descriptor("pip-services-emailsettings", "client", "memory", "*", "1.0")
    SitesMemoryClientV1Descriptor = Descriptor("pip-services-sites", "client", "memory", "*", "1.0")
    InvitationsNullClientV1Descriptor = Descriptor("pip-services-invitations", "client", "null", "*", "1.0")
    BeaconsMemoryClientV1Descriptor = Descriptor("beacons", "client", "memory", "*", "1.0")

    def __init__(self):
        super(ClientFacadeFactory, self).__init__()

        self.register_as_type(ClientFacadeFactory.SettingsNullClientV1Descriptor, SettingsNullClientV1)
        self.register_as_type(ClientFacadeFactory.AccountsMemoryClientV1Descriptor, AccountsMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.PasswordNullClientV1Descriptor, PasswordsNullClientV1)
        self.register_as_type(ClientFacadeFactory.RolesMemoryClientV1Descriptor, RolesMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.SessionsMemoryClientV1Descriptor, SessionsMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.EmailSettingsMemoryClientV1Descriptor, EmailSettingsMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.SitesMemoryClientV1Descriptor, SitesMemoryClientV1)
        self.register_as_type(ClientFacadeFactory.InvitationsNullClientV1Descriptor, InvitationsNullClientV1)
        self.register_as_type(ClientFacadeFactory.BeaconsMemoryClientV1Descriptor, BeaconsMemoryClientV1)

```
