---
type: docs
title: "ISetter"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Interface for data processing components that can set (create or update) data items.
---

### Description

The `ISetter[T any, K any]` interface is used by data processing components that can set (create or update) data items.
- T any type
- K any type of id (key)

### Methods

#### Set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> Set(ctx context.Context, context [IContext](../../../components/context/icontext), item T) (value T, err error)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **item**: T - item to be set.
- **returns**: (value T, err error) - updated item


