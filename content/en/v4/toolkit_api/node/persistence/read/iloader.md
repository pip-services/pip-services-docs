---
type: docs
title: "ILoader<T>"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-persistence-node"
description: >
    Interface for data processing components that load data items.
---

### Description

The ILoader interface is used by data processing components that load data items.

### Instance methods

#### load
Loads data items.

> load(context: [IContext](../../../components/context/icontext)): Promise\<T[]\>

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Promise\<T[]\> - list of data items

