---
type: docs
title: "ISaver"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Interface for data processing components that save data items.
---

### Description

The ISaver interface is used by data processing components that save data items.

### Methods

#### Save
Saves given data items.

> Save(correlation_id string, items []interface{}) error

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **items**: T[] - a list of items to save.
- **returns**: error - returns error if not saved
