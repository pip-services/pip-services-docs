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
from pip_services3_commons.config import ConfigParams
from pip_services3_commons.refer import IReferences
from pip_services3_rpc.services.AboutOperations import AboutOperations
from pip_services3_rpc.services.RestService import RestService

from pip_facades_sample_python.operations.version1.BeaconsOperationsV1 import BeaconsOperationsV1
from pip_facades_sample_python.operations.version1.InvitationsOperationsV1 import InvitationsOperationsV1
from pip_facades_sample_python.operations.version1.SessionsOperationsV1 import SessionsOperationsV1
from pip_facades_sample_python.operations.version1.SitesOperationsV1 import SitesOperationsV1
from pip_facades_sample_python.services.version1.AuthorizerV1 import AuthorizerV1


class FacadeServiceV1(RestService):

    def __init__(self):
        super(FacadeServiceV1, self).__init__()
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

The FacadeServiceV1 component extends the standard RestService, which implements the majority of the component’s basic functionality. All that we have left to do is define some routes and delegate their processing to the operations we defined in the previous steps.


A base route is defined in the constructor, which contains the API version that is implemented in the service.


In the **register** method, before we register our routes, we make sure to register the **load_session** interceptor, which will be loading user sessions using the parameters set in the REST requests.


Next, the routes are registered, access limits are set up using our Authorizer, and request handlers are defined using the business methods we implemented in our REST operation sets. For the sake of convenience, the registration functions are divided into 2 groups, each of which belongs to a specific operation-component.


When implementing a new version of the API, the following must be done:


1. Implement new REST operations or modify a copy of the existing ones;
2. Create a new FacadeServiceVx and set a new “/api/vx” base route;
3. Register routes for the new API and delegate their processing to the newly added and to already existing REST operations.

Continue on to [Step 6 - Testing of Operations](../step6) to see how we can automate the testing of the service and operations we’ve created, including the authentication and authorization of requests.

<span class="hide-title-link">

### [Step 6 - Testing of Operations](../step6)

</span>
