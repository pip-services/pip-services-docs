---
type: docs
title: "MongoDB"
gitUrl: "https://github.com/pip-services3-python/pip-services3-mongodb-python"
no_list: true
description: > 
    MongoDB components for Pip.Services in Python

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It provides a set of components to implement MongoDB persistence.
---

### Modules

The module contains the following packages:
- [**Build**](build) - Factory to create MongoDB persistence components.
- [**Connect**](connect) - Connection component to configure MongoDB connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Install the Python package as
```bash
pip install pip_services3_mongodb
```

As an example, lets create persistence for the following data object.

```python
from pip_services3_commons.data import IIdentifiable

class MyObject(dict):
    def __init__(self, id=None, key=None, content=None):
        self['id'] = id
        self['key'] = key
        self['content'] = content

```

The persistence component shall implement the following interface with a basic set of CRUD operations.

```python
from pip_services3_commons.data import DataPage, PagingParams, FilterParams


class IMyPersistence:

    def get_page_by_filter(self, correlation_id: str, filter: FilterParams, paging: PagingParams) -> DataPage:
        pass

    def get_one_by_id(self, correlation_id: str, id: str) -> dict:
        pass

    def get_one_by_key(self, correlation_id: str, key: str) -> dict:
        pass

    def create(self, correlation_id: str, item: Any)-> dict:
        pass

    def update(self, correlation_id: str, item: Any)-> dict:
        pass

    def delete_by_id(self, correlation_id: str, id: str) -> dict:
        pass
```

To implement mongodb persistence component you shall inherit `IdentifiableMongoDbPersistence`. 
Most CRUD operations will come from the base class. You only need to override `get_page_by_filter` method with a custom filter function.
And implement a `get_one_by_key` custom persistence method that doesn't exist in the base class.

```python
from pip_services3_commons.data import FilterParams
from pip_services3_mongodb.persistence import IdentifiableMongoDbPersistence


class MyMongoDbPersistence(IdentifiableMongoDbPersistence):
    def __init__(self):
        super(MyMongoDbPersistence, self).__init__('myobjects')

    def __composeFilter(self, filterr):
        filterr = filterr or FilterParams()
        id = filterr.get_as_nullable_string("id")
        if id:
            filterr.update({'_id': id})
        temp_ids = filterr.get_as_nullable_string("ids")
        if temp_ids:
            ids = temp_ids.split(",")
            filterr.update({'_id': {'$in': ids}})
        ids = temp_ids.split(",") if temp_ids is not None else None
        if ids:
            filterr.update({'_id': {'$in': ids}})
        key = filterr.get_as_nullable_string("key")

        if key:
            filterr.update({'key': key})

        if len(filterr) > 0:
            return {'$and': filterr}
        else:
            return None

    def get_page_by_filter(self, correlation_id, filter, paging, sort=None, select=None):
        return super().get_page_by_filter(correlation_id, filter, paging, '_id', select)

    def get_one_by_key(self, correlation_id, key):

        filterr = {'key': key}
        item = self._collection.find_one(filterr)
        if item:
            self._logger.trace(correlation_id, "Retrieved from {} with key = {}", self._collection_name, key)
            item = self._convert_to_public(item)
            return item
        else:
            self._logger.trace(correlation_id, "Nothing found from {} with key = {}", self._collection_name, key)
```

Configuration for your microservice that includes mongodb persistence may look the following way.

```yaml
...
{{#if MONGODB_ENABLED}}
- descriptor: pip-services:connection:mongodb:con1:1.0
  collection: {{MONGO_COLLECTION}}{{#unless MONGO_COLLECTION}}myobjects{{/unless}}
  connection:
    uri: {{{MONGO_SERVICE_URI}}}
    host: {{{MONGO_SERVICE_HOST}}}{{#unless MONGO_SERVICE_HOST}}localhost{{/unless}}
    port: {{MONGO_SERVICE_PORT}}{{#unless MONGO_SERVICE_PORT}}27017{{/unless}}
    database: {{MONGO_DB}}{{#unless MONGO_DB}}app{{/unless}}
  credential:
    username: {{MONGO_USER}}
    password: {{MONGO_PASS}}
    
- descriptor: myservice:persistence:mongodb:default:1.0
  dependencies:
    connection: pip-services:connection:mongodb:con1:1.0
{{/if}}
...
```

### Develop

For development you shall install the following prerequisites:
* Python 3.7+
* Visual Studio Code or another IDE of your choice
* Docker

Install dependencies:
```bash
pip install -r requirements.txt
```

Run automated tests:
```bash
python test.py
```

Generate API documentation:
```bash
./docgen.ps1
```

Before committing changes run dockerized build and test as:
```bash
./build.ps1
./test.ps1
./clear.ps1
```

### Contacts

The Python version of Pip.Services is created and maintained by **Sergey Seroukhov**
