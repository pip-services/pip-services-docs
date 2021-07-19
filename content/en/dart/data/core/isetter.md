---
type: docs
title: "ISetter<T>"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Interface for data processing components that can set (create or update) data items.
---

### Description

The ISetter interface is used by data processing components that can set (create or update) data items.

### Instance methods

#### set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> Future\<T\> set(String correlation_id, T item)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: Future\<T\> - updated item

