---
type: docs
title: "IGetter<T extends IIdentifiable<K>, K>"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-persistence-java"
description: >
    Interface for data processing components that can get data items.
---

### Description

The IGetter interface is used by data processing components that are capable of getting data items.

### Instance methods

#### getOneById
Gets a data item by its unique id.

> T getOneById([IContext](../../../components/context/icontext) context, K id) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **id**: K - id of the item to be retrieved.
- **returns**: T - returned item.

