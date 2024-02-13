---
type: docs
title: "IGetter"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    Interface for data processing components that can get data items.
---

### Description

The IGetter[T [IIdentifiable[T]](../../../commons/data/iidentifiable), K any] interface is used by data processing components that are capable of getting data items.

- T any type

### Methods

#### GetOneById
Gets a data item by its unique id.

> GetOneById(ctx context.Context, correlation_id string, id K) (item K, err error)

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be retrieved.
- **returns**: (item T, err error) - returned item.

