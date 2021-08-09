---
type: docs
title: "SQLServer module"
gitUrl: "https://github.com/pip-services3-python/pip-services3-sqlserver-python"
no_list: true
weight: 30
description: > 
    SQLServer components for Python. 

    This module is a part of the [Pip.Services](http://pipservices.org) polyglot microservices toolkit.
---

### Packages

The module contains the following packages:
- [**Build**](build) - a standard factory for constructing components
- [**Connect**](connect) - instruments for configuring connections to the database.
- [**Persistence**](persistence) - abstract classes for working with the database that can be used for connecting to collections and performing basic CRUD operations


### Use

Install the Python package as
```bash
pip install pip-services3-sqlserver
```


As an example, lets create persistence for the following data object.

```python
class MyObject(IStringIdentifiable):
    def __init__(self, id: str = None, key: str = None, content: str = None):
        self.id = id
        self.key = key
        self.content = content
```

The persistence component shall implement the following interface with a basic set of CRUD operations.

```python
from abc import ABC
from typing import Union, List

from pip_services3_commons.data import IIdentifiable, PagingParams, FilterParams, DataPage

class IMyPersistence(ABC):
    def get_page_by_filter(self, correlation_id: Optional[str], filter: Any,
                           paging: Any) -> DataPage:
        raise NotImplemented()

    def get_one_by_id(self, correlation_id: Optional[str], id: str) -> MyObject:
        raise NotImplemented()

    def get_one_by_key(self, correlation_id: Optional[str], key: List[str]) -> MyObject:
        raise NotImplemented()

    def create(self, correlation_id: Optional[str], item: MyObject) -> MyObject:
        raise NotImplemented()

    def update(self, correlation_id: Optional[str], item: MyObject) -> MyObject:
        raise NotImplemented()

    def delete_by_id(self, correlation_id: Optional[str], id: str):
        raise NotImplemented()
```

To implement sql server persistence component you shall inherit `IdentifiableSqlServerPersistence`. 
Most CRUD operations will come from the base class. You only need to override `get_page_by_filter` method with a custom filter function.
And implement a `get_one_by_key` custom persistence method that doesn't exist in the base class.

```python
class MySqlServerPersistence(IdentifiableSqlServerPersistence):
    def __init__(self):
        super(MySqlServerPersistence, self).__init__('myobjects')
        self._auto_create_object("CREATE TABLE [myobjects] ([id] VARCHAR(32) PRIMARY KEY, [key] VARCHAR(50), [value] NVARCHAR(255)")
        self._ensure_index("myobjects_key", { '[key]': 1 }, { 'unique': True })

    def __compose_filter(self, filter):
        filter = filter or FilterParams()

        criteria = []

        id = filter.get_as_nullable_string('id')
        if id is not None:
            criteria.append("[id]='" + id + "'")

        temp_ids = filter.get_as_nullable_string('ids')
        if temp_ids is not None:
            ids = temp_ids.split(',')
            criteria.append("[id] IN ('" + "','".join(ids) + "')")

        key = filter.get_as_nullable_string('key')
        if key is not None:
            criteria.append("[key]='" + key + "'")

        return " AND ".join(criteria) if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id, filter, paging, sort, select):
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, 'id', None)

    def get_one_by_key(self, correlation_id, key):
        query = "SELECT * FROM " + self._quoted_table_name() + " WHERE [key]=?"
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

Alternatively you can store data in non-relational format using `IdentificableJsonSqlServerPersistence`.
It stores data in tables with two columns - `id` with unique object id and `data` with object data serialized as JSON.
To access data fields you shall use `JSON_VALUE([data],'$.field')` expression.

```python
from pip_services3_sqlserver.persistence.IdentifiableJsonSqlServerPersistence import IdentifiableJsonSqlServerPersistence


class MySqlServerPersistence(IdentifiableJsonSqlServerPersistence):
    def __init__(self):
        super(MySqlServerPersistence, self).__init__('myobjects')
        self._ensure_table()
        self._auto_create_object("ALTER TABLE [myobjects] ADD [data_key] AS JSON_VALUE([data],'$.key')")
        self._ensure_index("myobjects_key", { 'data_key': 1 }, { 'unique': True })

    def __compose_filter(self, filter):
        filter = filter or FilterParams()

        criteria = []

        id = filter.get_as_nullable_string('id')
        if id is not None:
            criteria.append("JSON_VALUE([data],'$.id')='" + id + "'")

        temp_ids = filter.get_as_nullable_string('ids')
        if temp_ids is not None:
            ids = temp_ids.split(',')
            criteria.append("JSON_VALUE([data],'$.id') IN ('" + "','".join(ids) + "')")

        key = filter.get_as_nullable_string('key')
        if key is not None:
            criteria.append("JSON_VALUE([data],'$.key')='" + key + "'")

        return " AND ".join(criteria) if len(criteria) > 0 else None

    def get_page_by_filter(self, correlation_id, filter, paging, sort, select):
        return super().get_page_by_filter(correlation_id, self.__compose_filter(filter), paging, 'id', None)

    def get_one_by_key(self, correlation_id, key):
        query = "SELECT * FROM " + self._quoted_table_name() + " WHERE JSON_VALUE([data],'$.key')=?"
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

Configuration for your microservice that includes sqlserver persistence may look the following way.

```yaml
...
{{#if SQLSERVER_ENABLED}}
- descriptor: pip-services:connection:sqlserver:con1:1.0
  table: {{SQLSERVER_TABLE}}{{#unless SQLSERVER_TABLE}}myobjects{{/unless}}
  connection:
    uri: {{{SQLSERVER_SERVICE_URI}}}
    host: {{{SQLSERVER_SERVICE_HOST}}}{{#unless SQLSERVER_SERVICE_HOST}}localhost{{/unless}}
    port: {{SQLSERVER_SERVICE_PORT}}{{#unless SQLSERVER_SERVICE_PORT}}1433{{/unless}}
    database: {{SQLSERVER_DB}}{{#unless SQLSERVER_DB}}app{{/unless}}
  credential:
    username: {{SQLSERVER_USER}}
    password: {{SQLSERVER_PASS}}
    
- descriptor: myservice:persistence:sqlserver:default:1.0
  dependencies:
    connection: pip-services:connection:sqlserver:con1:1.0
{{/if}}
...
```