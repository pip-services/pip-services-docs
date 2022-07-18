---
type: docs
title: "ILoader<T>"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Interface for data processing components that load data items.
---

### Description

The ILoader interface is used by data processing components that load data items.

### Instance methods

#### load
Loads data items.

> load(correlationId: string): Promise\<T[]\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **returns**: Promise\<T[]\> - list of data items

