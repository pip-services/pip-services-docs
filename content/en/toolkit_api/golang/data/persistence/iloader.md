---
type: docs
title: "ILoader"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    Interface for data processing components that load data items.
---

### Description

The `ILoader[T any]` interface is used by data processing components that load data items.

- T any type

### Methods

#### Load
Loads data items.

> Load(ctx context.Context, correlationId string) (items []T, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (items []T, err error) - list of data items

