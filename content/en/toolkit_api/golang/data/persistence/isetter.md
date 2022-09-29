---
type: docs
title: "ISetter"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
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

> Set(ctx context.Context, correlation_id string, item T) (value T, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: (value T, err error) - updated item

