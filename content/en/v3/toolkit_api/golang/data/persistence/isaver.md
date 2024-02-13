---
type: docs
title: "ISaver"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-data-gox"
description: >
    Interface for data processing components that save data items.
---

### Description

The `ISaver[T any]` interface is used by data processing components that save data items.

- T any type

### Methods

#### Save
Saves given data items.

> Save(ctx context.Context, correlation_id string, items []T) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **items**: T[] - a list of items to save.
- **returns**: error - returns error if not saved
