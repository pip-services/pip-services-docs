---
type: docs
title: "ILoader"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services3-go/pip-services3-data-go"
description: >
    Interface for data processing components that load data items.
---

### Description

The ILoader interface is used by data processing components that load data items.

### Methods

#### Load
Loads data items.

> Load(correlation_id string) (items []interface{}, err error)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: (items []interface{}, err error) - list of data items

