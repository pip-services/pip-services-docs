---
type: docs
title: "ILoader"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-persistence-go"
description: >
    Interface for data processing components that load data items.
---

### Description

The `ILoader[T any]` interface is used by data processing components that load data items.

- T any type

### Methods

#### Load
Loads data items.

> Load(ctx context.Context, context [IContext](../../../components/context/icontext)) (items []T, err error)

- **ctx**: context.Context - operation context.
- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: (items []T, err error) - list of data items


