
```python
from pip_services3_components.auth import MemoryCredentialStore
from pip_services3_commons.config import ConfigParams

config = ConfigParams.from_tuples("key1.user", "jdoe",
    "key1.pass", "pass123",
    "key2.user", "bsmith",
    "key2.pass", "mypass"
)

credentialStore = MemoryCredentialStore(config)
```
