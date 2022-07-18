---
type: docs
title: "IGetter"
linkTitle: "IGetter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Interface for data processing components that can get data items.
---

### Description

The IGetter interface is used by data processing components that are capable of getting data items.

### Methods

#### GetOneById
Gets a data item by its unique id.

> GetOneById(correlation_id string, id interface{}) (item interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the item to be retrieved.
- **returns**: (item interface{}, err error) - returned item.

