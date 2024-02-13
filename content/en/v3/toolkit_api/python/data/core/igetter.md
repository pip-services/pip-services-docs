---
type: docs
title: "IGetter"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that can get data items.
---

**Implements:** [IIdentifiable](../../../commons/data/iidentifiable)

### Description

The IGetter interface is used by data processing components that are capable of getting data items.

### Instance methods

#### get_one_by_id
Gets a data item by its unique id.

> get_one_by_id(correlation_id: Optional[str], id: Any): T

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **id**: Any - id of the item to be retrieved.
- **returns**: T - returned item.

