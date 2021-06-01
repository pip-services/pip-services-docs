---
type: docs
title: "ISetter"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can set (create or update) data items.
---

### Description

The ISetter interface is used by data processing components that can set (create or update) data items.

### Instance methods

#### set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> set(correlation_id: Optional[str], item: T): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: T - updated item

