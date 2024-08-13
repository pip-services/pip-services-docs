
**/test/operations/version1/test_SessionsRoutesV1.py**

```python

# -*- coding: utf-8 -*-
import json

from pip_services4_commons.convert import JsonConverter, TypeCode

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
