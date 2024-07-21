
```python
from typing import Optional

import pymongo
from pip_services4_components.config import IConfigurable, ConfigParams

from pip_services4_components.run import IOpenable
from pymongo.collection import Collection

from pip_services4_config.connect import ConnectionUtils


class MongoDbConnector(IOpenable, IConfigurable):
    def __init__(self, secure_mongo=False):
        # The MongoDB connection object.
        self._connection: pymongo.MongoClient = None

        self._secure_mongo = secure_mongo
        self._config = ConfigParams()

    def is_open(self) -> bool:
        return self._connection is not None

    def get_collection(self) -> Collection:
        return self._connection.get_database().get_collection('test')

    def configure(self, config: ConfigParams):
        self._config = config

        # if connection passed as uri
        if self._config.get_as_nullable_string('uri'):
            self._config = ConnectionUtils.parse_uri(self._config.get_as_string('uri'), 'mongodb', 27017)

        # if mongo without auth
        if not self._secure_mongo:
            self._config = ConnectionUtils.exclude(self._config, 'username', 'password')

    def open(self, context: Optional[str]):
        collection = self._config.get_as_nullable_string('collection')
        self._config = ConnectionUtils.exclude(self._config, 'collection')

        uri = ConnectionUtils.compose_uri(self._config, 'mongodb', 27017)
        uri += '/' + collection

        self._connection = pymongo.MongoClient(uri)

    def close(self, context: Optional[str]):
        self._connection.close()
        self._connection = None


options = ConfigParams.from_tuples(
    "host", "localhost",
    "port", ",27017",
    "username", "user",
    "password", "pass123",
    "protocol", "mongodb",
    'collection', 'my_db_name'
)
# Create connection
conn = MongoDbConnector()
conn.configure(options)
conn.open(None)

```
