
```python
# -*- coding: utf-8 -*-
from pip_services4_components.config import ConfigParams
from pip_services4_components.refer import IReferences
from pip_services4_http.controller import AboutOperations,RestController

from pip_facades_sample_python.operations.version1.BeaconsOperationsV1 import BeaconsOperationsV1
from pip_facades_sample_python.operations.version1.InvitationsOperationsV1 import InvitationsOperationsV1
from pip_facades_sample_python.operations.version1.SessionsOperationsV1 import SessionsOperationsV1
from pip_facades_sample_python.operations.version1.SitesOperationsV1 import SitesOperationsV1
from pip_facades_sample_python.controllers.version1.AuthorizerV1 import AuthorizerV1


class FacadeControllerV1(RestController):

    def __init__(self):
        super(FacadeControllersV1, self).__init__()
        self._base_route = 'api/v1'

        self.__about_operations = AboutOperations()
        self.__session_operations = SessionsOperationsV1()
        self.__sites_operations = SitesOperationsV1()
        self.__invitations_operations = InvitationsOperationsV1()
        self.__beacons_operations = BeaconsOperationsV1()

    def configure(self, config: ConfigParams):
        super().configure(config)

        self.__about_operations.configure(config)
        self.__session_operations.configure(config)
        self.__sites_operations.configure(config)
        self.__invitations_operations.configure(config)
        self.__beacons_operations.configure(config)

    def set_references(self, references: IReferences):
        super().set_references(references)

        self.__about_operations.set_references(references)
        self.__session_operations.set_references(references)
        self.__sites_operations.set_references(references)
        self.__invitations_operations.set_references(references)
        self.__beacons_operations.set_references(references)

    def register(self):
        auth = AuthorizerV1()

        # Restore session middleware
        self.register_interceptor('', lambda: self.__session_operations.load_session())

        self.register_route_with_auth('get', '/about', None, auth.anybody(),
                                      lambda: self.__about_operations.get_about())
        # Session Routes
        self.register_route_with_auth('post', '/signup', None, auth.anybody(),
                                      lambda: self.__session_operations.signup())
        self.register_route_with_auth('get', '/signup/validate', None, auth.anybody(),
                                      lambda: self.__session_operations.signup_validate())
        self.register_route_with_auth('post', '/signin', None, auth.anybody(),
                                      lambda: self.__session_operations.signin())
        self.register_route_with_auth('post', '/signout', None, auth.anybody(),
                                      lambda: self.__session_operations.signout())
        self.register_route_with_auth('get', '/sessions', None, auth.admin(),
                                      lambda: self.__session_operations.get_sessions())
        self.register_route_with_auth('post', '/sessions/restore', None, auth.signed(),
                                      lambda: self.__session_operations.restore_session())
        self.register_route_with_auth('get', '/sessions/current', None, auth.signed(),
                                      lambda: self.__session_operations.get_current_session())
        self.register_route_with_auth('get', '/sessions/:user_id', None, auth.owner_or_admin('user_id'),
                                      lambda user_id: self.__session_operations.get_user_sessions(user_id))
        self.register_route_with_auth('del', '/sessions/:user_id/:session_id', None, auth.owner_or_admin('user_id'),
                                      lambda user_id, session_id: self.__session_operations.close_session(user_id,
                                                                                                          session_id))

        # Site Routes
        self.register_route_with_auth('get', '/sites', None, auth.signed(),
                                      lambda: self.__sites_operations.get_authorized_sites())
        self.register_route_with_auth('get', '/sites/all', None, auth.admin(),
                                      lambda: self.__sites_operations.get_sites())
        self.register_route_with_auth('get', '/sites/find_by_code', None, auth.anybody(),
                                      lambda: self.__sites_operations.find_site_by_code())
        self.register_route_with_auth('get', '/sites/:site_id', None, auth.site_user(),
                                      lambda site_id: self.__sites_operations.get_site(site_id))
        self.register_route_with_auth('post', '/sites/:site_id/generate_code', None, auth.site_admin(),
                                      lambda site_id: self.__sites_operations.generate_code(site_id))
        self.register_route_with_auth('post', '/sites', None, auth.signed(),
                                      lambda: self.__sites_operations.create_site())
        self.register_route_with_auth('post', '/sites/validate_code', None, auth.signed(),
                                      lambda: self.__sites_operations.validate_site_code())
        self.register_route_with_auth('put', '/sites/:site_id', None, auth.site_admin(),
                                      lambda site_id: self.__sites_operations.update_site(site_id))
        self.register_route_with_auth('delete', '/sites/:site_id', None, auth.admin(),
                                      lambda site_id: self.__sites_operations.delete_site(site_id))
        self.register_route_with_auth('post', '/sites/:site_id/remove', None, auth.site_user(),
                                      lambda site_id: self.__sites_operations.remove_site(site_id))

        # Invitation Routes
        self.register_route_with_auth('get', '/sites/:site_id/invitations', None, auth.site_user(),
                                      lambda site_id: self.__invitations_operations.get_invitations(site_id))
        self.register_route_with_auth('get', '/sites/:site_id/invitations/:invitation_id', None, auth.site_user(),
                                      lambda site_id, invitation_id: self.__invitations_operations.get_invitation(
                                          site_id, invitation_id))
        self.register_route_with_auth('post', '/sites/:site_id/invitations', None, auth.signed(),
                                      lambda site_id: self.__invitations_operations.send_invitation(site_id))
        self.register_route_with_auth('post', '/sites/:site_id/invitations/notify', None, auth.site_manager(),
                                      lambda site_id: self.__invitations_operations.notify_invitation(site_id))
        self.register_route_with_auth('delete', '/sites/:site_id/invitations/:invitation_id', None, auth.site_manager(),
                                      lambda site_id, invitation_id: self.__invitations_operations.delete_invitation(
                                          site_id, invitation_id))
        self.register_route_with_auth('post', '/sites/:site_id/invitations/:invitation_id/approve', None,
                                      auth.site_manager(),
                                      lambda site_id, invitation_id: self.__invitations_operations.approve_invitation(
                                          site_id, invitation_id))
        self.register_route_with_auth('post', '/sites/:site_id/invitations/:invitation_id/deny', None,
                                      auth.site_manager(),
                                      lambda site_id, invitation_id: self.__invitations_operations.deny_invitation(
                                          site_id, invitation_id))
        self.register_route_with_auth('post', '/sites/:site_id/invitations/:invitation_id/resend', None,
                                      auth.site_manager(),
                                      lambda site_id, invitation_id: self.__invitations_operations.resend_invitation(
                                          site_id, invitation_id))

        # Beacon Routes
        self.register_route_with_auth('get', '/sites/:site_id/beacons', None, auth.site_user(),
                                      lambda site_id: self.__beacons_operations.get_beacons(site_id))
        self.register_route_with_auth('get', '/sites/:site_id/beacons/:beacon_id', None, auth.site_user(),
                                      lambda site_id, beacon_id: self.__beacons_operations.get_beacon(site_id,
                                                                                                      beacon_id))
        self.register_route_with_auth('post', '/sites/:site_id/beacons/calculate_position', None, auth.site_user(),
                                      lambda site_id: self.__beacons_operations.calculate_position(site_id))
        self.register_route_with_auth('post', '/sites/:site_id/beacons', None, auth.site_user(),
                                      lambda site_id: self.__beacons_operations.create_beacon(site_id))
        self.register_route_with_auth('post', '/sites/:site_id/beacons/validate_udi', None, auth.signed(),
                                      lambda site_id: self.__beacons_operations.validate_beacon_udi(site_id))
        self.register_route_with_auth('put', '/sites/:site_id/beacons/:beacon_id', None, auth.site_user(),
                                      lambda site_id, beacon_id: self.__beacons_operations.update_beacon(site_id,
                                                                                                         beacon_id))
        self.register_route_with_auth('delete', '/sites/:site_id/beacons/:beacon_id', None, auth.site_user(),
                                      lambda site_id, beacon_id: self.__beacons_operations.delete_beacon(site_id,
                                                                                                         beacon_id))
```
