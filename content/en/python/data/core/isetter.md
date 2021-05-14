---
type: docs
title: "ISetter"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can set (create or update) data items.
---


### Methods

#### set
Sets a data item. If the data item exists it updates it, otherwise it create a new data item.

> set(self, correlation_id: Optional[str], item: Any): dict

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **item**: Any - a item to be set.
- **returns**: dict - updated item

