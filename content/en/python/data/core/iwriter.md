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

> create(correlation_id: Optional[str], item: Any) -> T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: Any - an item to be created.
- **returns**: Any - created item


#### update
Updates a data item.

> update(self, correlation_id: Optional[str], item: Any): dict

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: Any - an item to be updated.
- **returns**: dict - updated item


#### delete_by_id
Updates a data item.

> delete_by_id(correlation_id: Optional[str], id: Any): dict

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **id**: Any - an id of the item to be deleted
- **returns**: dict - deleted item.
