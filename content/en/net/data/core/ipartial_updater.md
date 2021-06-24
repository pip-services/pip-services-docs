---
type: docs
title: "IPartialUpdater<T, in K>"
linkTitle: "IPartialUpdater"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-data-dotnet"
description: >
    Interface for data processing components to update data items partially.
---

### Description

The IPartialUpdater interface is used by data processing components to update data items partially.

### Instance methods

#### UpdatePartially
Updates only few selected fields in a data item.

> Task\<T\> UpdatePartially(string correlation_id, K id, [AnyValueMap](../../../commons/data/any_value_map) data)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the data item to be updated.
- **data**: [AnyValueMap](../../../commons/data/any_value_map) - map with fields to be updated.
- **returns**: Task\<T\> - updated item
