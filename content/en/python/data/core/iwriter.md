---
type: docs
title: "IWriter"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can create, update and delete data items.
---


### Methods

#### create
Creates a data item.

> create(correlation_id: Optional[str], item: T) -> T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: T - an item to be created.
- **returns**: T - created item


#### update
Updates a data item.

> update(self, correlation_id: Optional[str], item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: T - an item to be updated.
- **returns**: T - updated item


#### delete_by_id
Updates a data item.

> delete_by_id(correlation_id: Optional[str], id: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **id**: Any - an id of the item to be deleted
- **returns**: T - deleted item.
