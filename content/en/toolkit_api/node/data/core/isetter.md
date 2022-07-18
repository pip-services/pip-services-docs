---
type: docs
title: "ISetter<T>"
linkTitle: "ISetter"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Interface for data processing components that can set (create or update) data items.
---

### Description

The ISetter interface is used by data processing components that can set (create or update) data items.

### Instance methods

#### set
Sets a data item. If the data item exists it updates it, otherwise it creates a new data item.

> set(correlationId: string, item: T): Promise\<T\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: T - item to be set.
- **returns**: Promise\<T\> - updated item

