---
type: docs
no_list: true
title: "Step 7. Testing of operations"
linkTitle: "Step 7. Testing" 
gitUrl: "https://github.com/pip-services-samples/facade-sample-python"
---

Before we integrate our new facade with the actual system, we should put it through its paces and thoroughly test it. So let’s develop a set of tests and helper elements for testing all of the operations registered in the facade. We’ll start off by creating a set of helper classes. One will test our dependencies, another will test how well the facade works with users, and the last one will contain a set of test users. All of these files will be placed in the folder **/test/fixtures**.

The file for testing dependencies will be called **TestReferences.py** and will allow us to test how well the facade is able to work with the microservices it depends on. This file’s code is listed below:

**/test/fixture/ReferencesTest.py**

```python
# -*- coding: utf-8 -*-
import datetime
from copy import deepcopy

from pip_services3_commons.config.ConfigParams import ConfigParams
from pip_services3_commons.refer.Descriptor import Descriptor
from pip_services3_container.refer.ManagedReferences import ManagedReferences
# from pip_services3_mongodb.build.DefaultMongoDbFactory import DefaultMongoDbFactory
from pip_services3_rpc.build.DefaultRpcFactory import DefaultRpcFactory

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
from pip_facades_sample_python.services.version1.FacadeServiceV1 import FacadeServiceV1
from pip_facades_sample_python.services.version2.FacadeServiceV2 import FacadeServiceV2
from test.fixtures.TestSites import TestSites
from test.fixtures.TestUsers import TestUsers


class ReferencesTest(ManagedReferences):

    def __init__(self):
        super(ReferencesTest, self).__init__()
        self._factory = ClientFacadeFactory()

        self.__append_dependencies()
        self.__configure_service()
        self.__create_user_and_sessions()

    def __append_dependencies(self):
        # Add factories
        self.put(None, ClientFacadeFactory())
        self.put(None, DefaultRpcFactory())

        # Add service
        self.put(None, FacadeServiceV1())
        self.put(None, FacadeServiceV2())

        # Add services
        self.put(Descriptor('pip-services-accounts', 'client', 'memory', 'default', '*'), AccountsMemoryClientV1())
        self.put(Descriptor('pip-services-sessions', 'client', 'memory', 'default', '*'), SessionsMemoryClientV1())
        self.put(Descriptor('pip-services-passwords', 'client', 'null', 'default', '*'), PasswordsNullClientV1())
        self.put(Descriptor('pip-services-roles', 'client', 'memory', 'default', '*'), RolesMemoryClientV1())
        self.put(Descriptor('pip-services-emailsettings', 'client', 'memory', 'default', '*'),
                 EmailSettingsMemoryClientV1())
        self.put(Descriptor('nov-services-sites', 'client', 'direct', 'memory', '*'), SitesMemoryClientV1())

    def __configure_service(self):
        # Configure Facade service
        service = self.get_one_required(Descriptor('pip-services', 'endpoint', 'http', 'default', '*'))

        service.configure(ConfigParams.from_tuples(
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
        sites_client: ISitesClientV1 = self.get_one_required(Descriptor('nov-services-sites', 'client', '*', '*', '*'))

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

Now, let’s create a file with a test client, which will help us test our user and session related operations. Place the code below into a file named **RestClientTest.py**:

**/test/fixture/RestClientTest.py**

```python
# -*- coding: utf-8 -*-

import requests


class RestClientTest:
    _rest = None
    headers = {'Content-type': 'application/json'}
    url = 'http://localhost:3000'

    def __init__(self):
        self._rest = requests.Session()

    def get(self, path):
        response = self._rest.request('GET', self.url + path, headers=self.headers)
        return response

    def head(self, path):
        response = self._rest.request('HEAD', self.url + path, headers=self.headers)
        return response

    def post(self, path, params):
        response = self._rest.request('POST', self.url + path, json=params, headers=self.headers)
        return response

    def put(self, path, params):
        response = self._rest.request('PUT', self.url + path, json=params, headers=self.headers)
        return response

    def delete(self, path, params=None):
        response = self._rest.request('DELETE', self.url + path, json=params, headers=self.headers)
        return response

    def get_as_user(self, session_id, path):
        self.headers.update({'x-session-id': session_id})
        # self._rest.request('GET', path, headers=self.headers)
        return self._rest.get(self.url + path, headers=self.headers)

    def head_as_user(self, session_id, path):
        self.headers.update({'x-session-id': session_id})
        return self._rest.head(self.url + path, headers=self.headers)

    def post_as_user(self, session_id, path, params):
        self.headers.update({'x-session-id': session_id})
        return self._rest.post(self.url + path, json=params, headers=self.headers)

    def put_as_user(self, session_id, path, params):
        self.headers.update({'x-session-id': session_id})
        return self._rest.put(self.url + path, json=params, headers=self.headers)

    def delete_as_user(self, session_id, path):
        self.headers.update({'x-session-id': session_id})
        return self._rest.delete(self.url + path, headers=self.headers)

```

Lastly, define some test users in a file named **TestUsers.py**, as shown below:

**/test/fixture/TestUsers.py**

```python
# -*- coding: utf-8 -*-

class TestUsers:
    AdminUserId: str = '1'
    AdminUserName: str = 'Admin User'
    AdminUserLogin: str = 'admin'
    AdminUserPassword: str = 'pwd123'
    AdminUserSessionId: str = '111'
    User1Id: str = '2'
    User1Name: str = 'User #1'
    User1Login: str = 'user1'
    User1Password: str = 'pwd123'
    User1SessionId: str = '222'
    User2Id: str = '3'
    User2Name: str = 'User #2'
    User2Login: str = 'user2'
    User2Password: str = 'pwd123'
    User2SessionId: str = '333'

```

Now we can move on to the tests themselves. Create the following files in the folder **test/operations**:

**test_BeaconsRoutesV1.py** - for testing business logic operations of the Beacons microservice:

**/test/operations/test_BeaconsRoutesV1.py**

```python
# -*- coding: utf-8 -*-

from pip_services3_commons.convert import JsonConverter, TypeCode
from pip_services3_commons.refer import Descriptor

from pip_facades_sample_python.clients.version1.BeaconV1 import BeaconV1
from pip_facades_sample_python.clients.version1.BeaconsMemoryClientV1 import BeaconsMemoryClientV1
from test.fixtures.ReferencesTest import ReferencesTest
from test.fixtures.RestClientTest import RestClientTest
from test.fixtures.TestUsers import TestUsers

BEACON1 = BeaconV1(id="1",
                   site_id="1",
                   udi="00001",
                   label="TestBeacon1",
                   center={"type": 'Point', "coordinates": [0, 0]},
                   radius=50)

BEACON2 = BeaconV1(id="2",
                   site_id="1",
                   udi="00002",
                   label="TestBeacon2",
                   center={"type": 'Point', "coordinates": [2, 2]},
                   radius=70)

BEACON3 = BeaconV1(id="3",
                   site_id="2",
                   udi="00003",
                   label="TestBeacon3",
                   center={"type": 'Point', "coordinates": [10, 10]},
                   radius=50)


class TestBeaconsOperationsV1:
    references: ReferencesTest = None
    rest: RestClientTest = None

    @classmethod
    def setup_class(cls):
        cls.rest = RestClientTest()
        cls.references = ReferencesTest()
        cls.references.put(Descriptor('nov-services-beacons', 'client', 'memory', 'default', '1.0'),
                           BeaconsMemoryClientV1())

        cls.references.open(None)

    @classmethod
    def teardown_class(cls):
        cls.references.close(None)

    def test_beacons_operations(self):
        # Create one beacon
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + BEACON1.site_id + '/beacons',
                                          JsonConverter.to_json(BEACON1))

        created_beacon = JsonConverter.from_json(TypeCode.Map, response.content)
        beacon1 = created_beacon

        assert response.status_code < 300
        assert BEACON1.udi == created_beacon['udi']
        assert BEACON1.id == created_beacon['id']
        assert BEACON1.site_id == created_beacon['site_id']
        assert created_beacon['center'] is not None

        # Create the second beacon
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + BEACON2.site_id + '/beacons',
                                          JsonConverter.to_json(BEACON2))
        assert response.status_code < 300

        created_beacon = JsonConverter.from_json(TypeCode.Map, response.content)
        assert BEACON2.udi == created_beacon['udi']
        assert BEACON2.id == created_beacon['id']
        assert BEACON2.site_id == created_beacon['site_id']
        assert created_beacon['center'] is not None

        # Create yet another beacon
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + BEACON3.site_id + '/beacons',
                                          JsonConverter.to_json(BEACON3))
        assert response.status_code < 300

        created_beacon = JsonConverter.from_json(TypeCode.Map, response.content)
        assert BEACON3.udi == created_beacon['udi']
        assert BEACON3.id == created_beacon['id']
        assert BEACON3.site_id == created_beacon['site_id']
        assert created_beacon['center'] is not None

        # Get all beacons
        response = self.rest.get_as_user(TestUsers.AdminUserSessionId,
                                         '/api/v1/sites/' + BEACON1.site_id + '/beacons', )
        beacons = JsonConverter.from_json(TypeCode.Map, response.content)
        assert len(beacons['data']) == 2

        # Calculate position for one beacon
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + BEACON1.site_id + '/beacons/calculate_position', {
                                              'site_id': BEACON1.site_id,
                                              'udis': [BEACON1.udi]
                                          })

        calc_position = JsonConverter.from_json(TypeCode.Map, response.content)

        assert response.status_code < 300
        assert calc_position['type'] == 'Point'
        assert len(calc_position['coordinates']) == 2

        # Validate beacon udi
        response = self.rest.post_as_user(TestUsers.AdminUserSessionId,
                                          '/api/v1/sites/' + beacon1['site_id'] + '/beacons/validate_udi?udi=' +
                                          beacon1['udi'],
                                          {}, )
        assert JsonConverter.from_json(TypeCode.Map, response.content)['id'] == beacon1['id']

        # Update the beacon
        BEACON1.label = 'ABC'
        response = self.rest.put_as_user(TestUsers.AdminUserSessionId,
                                         '/api/v1/sites/' + beacon1['site_id'] + '/beacons/' + beacon1['id'],
                                         JsonConverter.to_json(BEACON1))

        updated_beacon = JsonConverter.from_json(TypeCode.Map, response.content)
        beacon1 = updated_beacon

        assert response.status_code < 300
        assert BEACON1.id == updated_beacon['id']
        assert updated_beacon['label'] == 'ABC'

        # Delete the beacon
        response = self.rest.delete_as_user(TestUsers.AdminUserSessionId,
                                            '/api/v1/sites/' + beacon1['site_id'] + '/beacons/' + beacon1['id'])
        deleted_result = JsonConverter.from_json(TypeCode.Map, response.content)
        assert deleted_result['id'] == BEACON1.id

        # Try to get deleted beacon
        response = self.rest.get_as_user(TestUsers.AdminUserSessionId,
                                         '/api/v1/sites/' + beacon1['site_id'] + '/beacons/' + beacon1['id'], )
        assert response.status_code == 204
```

**test_SessionsRoutesV1.py** - for testing user and session related operations:

**/test/operations/test_SessionsRoutesV1.py**

```python

# -*- coding: utf-8 -*-
import json

from pip_services3_commons.convert import JsonConverter, TypeCode

from test.fixtures.ReferencesTest import ReferencesTest
from test.fixtures.RestClientTest import RestClientTest
from test.fixtures.TestUsers import TestUsers

USER = {
    'login': 'test',
    'name': 'Test User',
    'email': 'test@conceptual.vision',
    'password': 'test123'
}


class TestSessionRoutesV1:
    references: ReferencesTest = None
    rest: RestClientTest = None

    def setup_method(self):
        self.rest = RestClientTest()
        self.references = ReferencesTest()
        self.references.open(None)

    def teardown_method(self):
        self.references.close(None)

    def test_should_signup_new_user(self):
        response = self.rest.post('/api/v1/signup', USER)
        session = json.loads(response.content)
        JsonConverter.from_json(TypeCode.Map, response.content)
        assert session is not None
        assert session['id'] is not None
        assert session['user_name'] == USER['name']

    def test_should_check_login_for_signup(self):
        # Check registered email
        response = self.rest.get('/api/v1/signup/validate?login=' + TestUsers.User1Login)
        result = json.loads(response.content)
        assert result['status'] == 400
        assert result['code'] == "LOGIN_ALREADY_USED"

        # Check not registered email
        response = self.rest.get('/api/v1/signup/validate?login=xxx@gmail.com')
        assert response.status_code == 204
        assert response.content == b''

    def test_should_not_signup_with_the_same_email(self):
        # Sign up
        response = self.rest.post('/api/v1/signup', USER)
        session = json.loads(response.content)
        assert response.status_code == 200

        # Try to sign up again
        response = self.rest.post('/api/v1/signup', USER)
        result = json.loads(response.content)
        assert result['status'] == 400
        assert result['code'] == 'DUPLICATE_LOGIN'

    def test_should_signout(self):
        response = self.rest.post('/api/v1/signout', {})

        assert response.status_code == 204
        assert response.content == b''

    def test_should_signin_with_email_and_password(self):
        # Sign up
        response = self.rest.post('/api/v1/signup', USER)
        session = json.loads(response.content)

        assert response.status_code == 200
        assert isinstance(session, dict)

        # Sign in with username
        response = self.rest.post('/api/v1/signin', {
            'login': USER['login'],
            'password': USER['password']
        })

        session = json.loads(response.content)
        assert response.status_code == 200
        assert isinstance(session, dict)


    def test_should_get_sessions_as_admin(self):
        response = self.rest.get_as_user(TestUsers.AdminUserSessionId,
                                         '/api/v1/sessions?paging=1&skip=0&take=2')
        page = json.loads(response.content)

        assert page is not None and page != {}

    def test_should_get_user_sessions_as_owner(self):
        response = self.rest.get_as_user(TestUsers.User1SessionId,
                                         '/api/v1/sessions/' + TestUsers.User1Id + '?paging=1&skip=0&take=2', )
        page = json.loads(response.content)

        assert page is not None and page != {}

```

Run the tests using the following command:

```bash
python test.py
```

Once all the tests pass successfully, you can move on to [Step 8 - Running the facade](../step7) - to learn how to deploy all of these microservices using Docker.


<span class="hide-title-link">

### [Step 8 - Running the facade](../step7)

</span>
