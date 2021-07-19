---
type: docs
title: "IGetter<T extends IIdentifiable<K>, K>"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Interface for data processing components that can get data items.
---

### Description

The IGetter interface is used by data processing components that are capable of getting data items.

### Instance methods

#### getOneById
Gets a data item by its unique id.

> Future\<T\> getOneById(String correlation_id, K id)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: K - id of the item to be retrieved.
- **returns**: Future\<T\> - returned item.

