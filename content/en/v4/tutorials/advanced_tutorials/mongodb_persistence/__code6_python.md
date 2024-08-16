
The implementation we will be working with going forward is called the [IdentifiableMongoDbPersistence](../../../toolkit_api/python/mongodb/persistence/identifiable_mongodb_persistence/). It stores and processes data objects that have a unique ID field and implement the [IIdentifiable](../../../toolkit_api/python/data/data/iidentifiable/) interface defined in [the Commons module](../../../toolkit_api/python/data).

```python
class IIdentifiable(ABC):
    id: Any
```
