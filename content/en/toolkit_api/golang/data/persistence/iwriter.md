---
type: docs
title: "IWriter"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    Interface for data processing components that can create, update and delete data items.
---

### Description

The `IWriter[T any, K any]` interface is used by data processng components that can create, update and delete data items.
- T any type
- K any type of id (key)

### Methods

#### Create
Creates a data item.

> Create(ctx context.Context, correlation_id string, item T) (value T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be created.
- **returns**: (value T, err error) - created item


#### Update
Updates a data item.

> Update(ctx context.Context, correlation_id string, item T) (value T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be updated.
- **returns**: (value T, err error) - updated item


#### DeleteById
Updates a data item.

> DeleteById(ctx context.Context, correlation_id string, id K) (value T, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be deleted
- **returns**: (value T, err error) - deleted item.
