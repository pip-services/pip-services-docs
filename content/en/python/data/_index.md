---
type: docs
title: "Data module"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
no_list: true
description: > 
   
    Persistence components for Python This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It contains generic interfaces for data access components as well as abstract implementations for in-memory and file persistence.     
    The persistence components come in two kinds. The first kind is a basic persistence that can work with any object types and provides only minimal set of operations. The second kind is so called "identifieable" persistence with works with "identifable" data objects, i.e. objects that have unique ID field. The identifiable persistence provides a full set or CRUD operations that covers most common cases.


---


### Packages

The module contains the following packages:

* [**Core**](core) - interfaces for data access components. 
* [**Persistence**](persistence) - in-memory and file persistence components, as well as JSON persister class.


### Use

Install the Python package as
```bash
pip install pip_services3_data
```

As an example, lets implement persistence for the following data object:

```python
class Dummy(IStringIdentifiable):
    def __init__(self, id=None, key=None, content=None):
        self.id = id
        self.key = key
        self.content = content
```

Our persistence component shall implement the following interface with a basic set of CRUD operations:

```python
class IMyPersistence(ABC):
    def get_page_by_filter(self, correlation_id: Optional[str], filter: Any,
                           paging: Union[PagingParams, None]) -> DataPage:
        raise NotImplemented()

    def get_one_by_id(self, correlation_id: Optional[str], id: str) -> T:
        raise NotImplemented()

    def get_one_by_key(self, correlation_id: Optional[str], key: List[str]) -> T:
        raise NotImplemented()

    def create(self, correlation_id: Optional[str], item: T) -> T:
        raise NotImplemented()

    def update(self, correlation_id: Optional[str], item: T) -> T:
        raise NotImplemented()

    def delete_by_id(self, correlation_id: Optional[str], id: str):
        raise NotImplemented()

```

To implement in-memory persistence component you shall inherit `IdentifiableMemoryPersistence`. 
Most CRUD operations will come from the base class. You only need to override `get_page_by_filter` method with a custom filter function.
And then, implement a `get_one_by_key` custom persistence method that doesn't exist in the base class.

```python
from pip_services3_commons.data import FilterParams, DataPage, PagingParams
from pip_services3_data.persistence.IdentifiableMemoryPersistence import IdentifiableMemoryPersistence


class MyMemoryPersistence(IdentifiableMemoryPersistence):
    def __init__(self):
        super(MyMemoryPersistence, self).__init__()

    def __composeFilter(self, filterr):
        filterr = filterr or FilterParams()
        id = filterr.get_as_nullable_string("id")
        temp_ids = filterr.get_as_nullable_string("ids")
        ids = temp_ids.split(",") if temp_ids is not None else None
        key = filterr.get_as_nullable_string("key")

        def inner(item):
            if id is not None and item['id'] != id:
                return False
            if ids is not None and item['ids'] != ids:
                return False
            if key is not None and item['key'] != key:
                return False
            return True

        return inner

    def get_page_by_filter(self, correlation_id, filter, paging, sort=None, select=None):
        return super().get_page_by_filter(correlation_id, filter, paging, sort, select)

    def get_one_by_key(self, correlation_id, key):
        for item in self._items:
            if item['key'] == key:
                self._logger.trace(correlation_id, "Found object by key={}", key)
                return item
            else:
                self._logger.trace(correlation_id, "Cannot find by key={}", key)
```

It is easy to create file persistence by adding a persister object to the implemented in-memory persistence component.

```python
from pip_services3_commons.config import ConfigParams
from pip_services3_data.persistence import JsonFilePersister


class MyFilePersistence(MyMemoryPersistence):
    _persister: JsonFilePersister

    def __init__(self, path=None):
        super(MyFilePersistence, self).__init__()
        self._persister = JsonFilePersister(path)
        self._loader = self._persister
        self._saver = self._persister

    def configure(self, config: ConfigParams):
        super().configure(config)
        self._persister.configure(config)
```

Furthermore, the configuration of your microservice that includes memory and file persistence may look the following way:

```yaml
...
{{#if MEMORY_ENABLED}}
- descriptor: "myservice:persistence:memory:default:1.0"
{{/if}}

{{#if FILE_ENABLED}}
- descriptor: "myservice:persistence:file:default:1.0"
  path: {{FILE_PATH}}{{#unless FILE_PATH}}"../data/data.json"{{/unless}}
{{/if}}
...
```
