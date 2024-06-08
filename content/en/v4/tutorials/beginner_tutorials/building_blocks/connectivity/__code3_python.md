
```python
from pip_services4_components.config import ConfigParams, IConfigurable
from pip_services4_config.auth import CredentialParams


class MyPersistence(IConfigurable):
    # ...
    _username: str
    _password: str

    def configure(self, config: ConfigParams):
        # ...
        credentials = CredentialParams.from_config(config.get_section("credential"))
        self._username = credentials.get_username()
        self._password = credentials.get_password()
```
