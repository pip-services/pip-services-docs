---
type: docs
title: "ILoader<T>"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-data-dart"
description: >
    Interface for data processing components that load data items.
---

### Description

The ILoader interface is used by data processing components that load data items.

### Instance methods

#### load
Loads data items.

> Future\<List\<T\>\> load(String correlation_id)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **returns**: Future\<List\<T\>\> - list of data items

