---
type: docs
title: "ISetter"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Interface for data processing components that can set (create or update) data items.
---

### Description

The ISetter interface is used by data processing components that can set (create or update) data items.

### Instance methods

#### Set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> Set(correlation_id string, item interface{}) (value interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be set.
- **returns**: (value interface{}, err error) - updated item

