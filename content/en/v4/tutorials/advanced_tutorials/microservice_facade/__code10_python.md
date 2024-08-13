
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
