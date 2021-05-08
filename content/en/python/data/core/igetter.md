---
type: docs
title: "IGetter"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can get data items.
---

**Implements:** [IIdentifiable](../../../commons/data/iidentifiable)


### Methods

#### get_one_by_id
Gets a data items by its unique id.

> get_one_by_id(correlation_id: Optional[str], id: Any): Any

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **id**: Any - an id of item to be retrieved.
- **returns**: Any - an item by its id.

