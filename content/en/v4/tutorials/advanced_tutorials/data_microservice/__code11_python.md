
**/test/persistence/test_BeaconMemoryPersistence.py**

```python
from src.persistence.BeaconsMemoryPersistence import BeaconsMemoryPersistence
from .BeaconsPersistenceFixture import BeaconsPersistenceFixture


class TestBeaconMemoryPersistence():
    persistence: BeaconsMemoryPersistence
    fixture: BeaconsPersistenceFixture

    @classmethod
    def setup_class(cls):
        cls.persistence = BeaconsMemoryPersistence()
        cls.fixture = BeaconsPersistenceFixture(cls.persistence)

    def setup_method(self, method):
        self.persistence.clear(None)

    def test_crud_operations(self):
        self.fixture.test_crud_operations()

    def test_get_with_filter(self):
        self.fixture.test_get_with_filter()
```
