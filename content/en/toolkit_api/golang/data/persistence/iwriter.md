---
type: docs
title: "IWriter"
linkTitle: "IWriter"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Interface for data processing components that can create, update and delete data items.
---

### Description

The IWriter interface is used by data processng components that can create, update and delete data items.

### Methods

#### Create
Creates a data item.

> Create(correlation_id string, item interface{}) (value interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be created.
- **returns**: (value interface{}, err error) - created item


#### Update
Updates a data item.

> Update(correlation_id string, item interface{}) (value interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **item**: interface{} - item to be updated.
- **returns**: (value interface{}, err error) - updated item


#### DeleteById
Updates a data item.

> DeleteById(correlation_id string, id interface{}) (value interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **id**: interface{} - id of the item to be deleted
- **returns**: (value interface{}, err error) - deleted item.
