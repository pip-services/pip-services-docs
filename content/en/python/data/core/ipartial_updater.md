---
type: docs
title: "IPartialUpdater"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components to update data items partially.
---


### Methods

#### update_partially
Updates only few selected fields in a data item.

> update_partially(correlation_id: Optional[str], id: Any, data: [AnyValueMap](../../../commons/data/any_value_map)): T

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **id**: Any - an id of data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - a map with fields to be updated.
- **returns**: T - updated item
