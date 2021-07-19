---
type: docs
title: "IPartialUpdater<T, K>"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The IPartialUpdater interface is used by data processing components to update data items partially.

### Instance methods

#### updatePartially
Updates only few selected fields in a data item.

> Future\<T\> updatePartially(String correlation_id, K id, [AnyValueMap](../../../commons/data/any_value_map) data)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Future\<T\> - updated item
