---
type: docs
title: "IWriter"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
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

> Create(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (value T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be created.
- **returns**: (value T, err error) - created item


#### Update
Updates a data item.

> Update(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (value T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be updated.
- **returns**: (value T, err error) - updated item


#### DeleteById
Updates a data item.

> DeleteById(ctx context.Context, context [IContext](../../../components/context/icontext), id K) (value T, err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be deleted
- **returns**: (value T, err error) - deleted item.

