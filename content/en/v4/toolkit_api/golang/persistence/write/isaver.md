---
type: docs
title: "ISaver"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Interface for data processing components that save data items.
---

### Description

The `ISaver[T any]` interface is used by data processing components that save data items.

- T any type

### Methods

#### Save
Saves given data items.

> Save(ctx context.Context, context [IContext](../../../components/context/icontext), items []T) error

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **items**: T[] - a list of items to save.
- **returns**: error - returns error if not saved

