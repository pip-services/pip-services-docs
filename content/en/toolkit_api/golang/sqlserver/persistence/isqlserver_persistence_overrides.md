---
type: docs
title: "ISqlServerPersistenceOverrides[T]"
linkTitle: "ISqlServerPersistenceOverrides"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-sqlserver-gox"
description: >
    Interface defining methods for object conversion.
---

### Description

The ISqlServerPersistenceOverrides[T] interface is used to perform on-demand registrations.

### Methods

#### ConvertFromPublic
Converts an object value from public to internal format.

> ConvertFromPublic(item T) any

- **value**: any - object in public format to convert.
- **returns**: (map[string]any, error) - converted object in internal format.

#### ConvertFromPublicPartial
ConvertFromPublicPartial method help convert object (map) from public view by replaced "Id" to "_id" field
> ConvertFromPublicPartial(item T) (map[string]any, error)

- **item**: T - item for conversion.
- **returns**: (map[string]any, error) - result map

#### ConvertToPublic
Converts and object value from internal to public format.

> (c *MongoDbPersistence) ConvertToPublic(value *sql.Rows) (T, error)

- **value**: *sql.Rows - object in internal format to convert.
- **returns**: (T, error) - converted object in public format.

#### DefineSchema
Defines the database schema

> DefineSchema()



