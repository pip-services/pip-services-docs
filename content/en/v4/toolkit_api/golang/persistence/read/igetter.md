---
type: docs
title: "IGetter"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Interface for data processing components that can get data items.
---

### Description

The IGetter[T [IIdentifiable[T]](../../../data/data/iidentifiable), K any] interface is used by data processing components that are capable of getting data items.

- T any type

### Methods

#### GetOneById
Gets a data item by its unique id.

> GetOneById(ctx context.Context, context [IContext](../../../components/context/icontext), id K) (item K, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be retrieved.
- **returns**: (item T, err error) - returned item.


