---
type: docs
title: "Postgres"
gitUrl: "https://github.com/pip-services3-python/pip-services3-postgres-python"
no_list: true
description: > 
    PostgreSQL components for Pip.Services in Python

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit. It provides a set of components to implement PostgreSQL persistence.
---

### Packages

The module contains the following packages:
- [**Build**](build) - Factory to create PostreSQL persistence components.
- [**Connect**](connect) - Connection component to configure PostgreSQL connection to database.
- [**Persistence**](persistence) - abstract persistence components to perform basic CRUD operations.


### Use

Install the Python package as
```bash
pip install pip-services3-postgres
```

As an example, lets create persistence for the following data object.

```python
from pip_services3_commons.data import IIdentifiable

class MyObject(IIdentifiable):
    def __init__(self, id=None, key=None, value=None):
        self.id = id
        self.key = key
        self.value = value
```

The persistence component shall implement the following interface with a basic set of CRUD operations.

```python
from abc import ABC
from typing import Union, List

from pip_services3_commons.data import IIdentifiable, PagingParams, FilterParams, DataPage

class IMyPersistence(ABC):
    def get_page_by_filter(self, correlation_id: Union[str, None], filter: Union[FilterParams, None],
                           paging: Union[PagingParams, None]) -> DataPage:
        raise NotImplemented()

    def get_one_by_id(self, correlation_id: Union[str, None], id: str) -> MyObject:
        raise NotImplemented()

    def get_one_by_key(self, correlation_id: Union[str, None], key: List[str]) -> MyObject:
        raise NotImplemented()

    def create(self, correlation_id: Union[str, None], item: MyObject) -> MyObject:
        raise NotImplemented()

    def update(self, correlation_id: Union[str, None], item: MyObject) -> MyObject:
        raise NotImplemented()

    def delete_by_id(self, correlation_id: Union[str, None], id: str):
        raise NotImplemented()
```

To implement postgresql persistence component you shall inherit `IdentifiablePostgresPersistence`. 
Most CRUD operations will come from the base class. You only need to override `get_page_by_filter` method with a custom filter function.
And implement a `get_one_by_key` custom persistence method that doesn't exist in the base class.

```python
class MyPostgresPersistence(IdentifablePostgresPersistence):
    def __init__(self):
        super(MyPostgresPersistence, self).__init__('myobjects')
        self._auto_create_object("CREATE TABLE myobjects (id VARCHAR(32) PRIMARY KEY, key VARCHAR(50), value VARCH(255)")
        self._ensure_index("myobjects_key", { 'key': 1 }, { 'unique': True })

    def __compose_filter(self, filter):
        filter = filter or FilterParams()

        criteria = []

        id = filter.get_as_nullable_string('id')
        if id is not None:
            criteria.append("id='" + id + "'")

        temp_ids = filter.get_as_nullable_string('ids')
        if temp_ids is not None:
            ids = temp_ids.split(',')
            criteria.append("id IN ('" + "','".join(ids) + "')")

        key = filter.get_as_nullable_string('key')
        if key is not None:
            criteria.append("key='" + key + "'")

        return " AND ".join(criteria) if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id, filter, paging, sort, select):
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, 'id', None)

    def get_one_by_key(self, correlation_id, key):
        query = "SELECT * FROM " + self._quote_identifier(self._table_name) + " WHERE \"key\"=%s"
        params = [key]

        result = self._request(query, params)
        item = result[0] or None if result and result[0] else None

        if item is None:
            self._logger.trace(correlation_id, "Nothing found from %s with key = %s", self._table_name, key)
        else:
            self._logger.trace(correlation_id, "Retrieved from %s with key = %s", self._table_name, key)

        item = self._convert_to_public(item)

        return item
```

Alternatively you can store data in non-relational format using `IdentificableJsonPostgresPersistence`.
It stores data in tables with two columns - `id` with unique object id and `data` with object data serialized as JSON.
To access data fields you shall use `data->'field'` expression or `data->>'field'` expression for string values.

```python
from pip_services3_postgres.persistence.IdentifiableJsonPostgresPersistence import IdentifiableJsonPostgresPersistence


class MyPostgresPersistence(IdentifableJsonPostgresPersistence):
    def __init__(self):
        super(MyPostgresPersistence, self).__init__('myobjects')
        self._ensure_table("VARCHAR(32)", "JSONB")
        self._ensure_index("myobjects_key", { "data->>'key'": 1 }, { 'unique': True })

    def __compose_filter(self, filter):
        filter = filter or FilterParams()

        criteria = []

        id = filter.get_as_nullable_string('id')
        if id is not None:
            criteria.append("data->>'id'='" + id + "'")

        temp_ids = filter.get_as_nullable_string('ids')
        if temp_ids is not None:
            ids = temp_ids.split(',')
            criteria.append("data->>'id' IN ('" + "','".join(ids) + "')")

        key = filter.get_as_nullable_string('key')
        if key is not None:
            criteria.append("data->>'key'='" + key + "'")

        return " AND ".join(criteria) if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id, filter, paging, sort, select):
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, 'id', None)

    def get_one_by_key(self, correlation_id, key):
        query = "SELECT * FROM " + self._quote_identifier(self._table_name) + " WHERE data->>'key'=%s"
        params = [key]

        result = self._request(query, params)
        item = result[0] or None if result and result[0] else None

        if item is None:
            self._logger.trace(correlation_id, "Nothing found from %s with key = %s", self._table_name, key)
        else:
            self._logger.trace(correlation_id, "Retrieved from %s with key = %s", self._table_name, key)

        item = self._convert_to_public(item)

        return item
```

Configuration for your microservice that includes postgresql persistence may look the following way.

```yaml
...
{{#if POSTGRES_ENABLED}}
- descriptor: pip-services:connection:postgres:con1:1.0
  connection:
    uri: {{{POSTGRES_SERVICE_URI}}}
    host: {{{POSTGRES_SERVICE_HOST}}}{{#unless POSTGRES_SERVICE_HOST}}localhost{{/unless}}
    port: {{POSTGRES_SERVICE_PORT}}{{#unless POSTGRES_SERVICE_PORT}}5432{{/unless}}
    database: {{POSTGRES_DB}}{{#unless POSTGRES_DB}}app{{/unless}}
  credential:
    username: {{POSTGRES_USER}}
    password: {{POSTGRES_PASS}}
    
- descriptor: myservice:persistence:postgres:default:1.0
  dependencies:
    connection: pip-services:connection:postgres:con1:1.0
  table: {{POSTGRES_TABLE}}{{#unless POSTGRES_TABLE}}myobjects{{/unless}}
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

The library is created and maintained by:
- **Sergey Seroukhov**
- **Danil Prisiazhnyi**

The documentation is written by **Mark Makarychev**.