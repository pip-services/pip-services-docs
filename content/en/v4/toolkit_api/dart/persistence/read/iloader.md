---
type: docs
title: "ILoader<T>"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-persistence-dart"
description: >
    Interface for data processing components that load data items.
---

### Description

The ILoader interface is used by data processing components that load data items.

### Instance methods

#### load
Loads data items.

> Future\<List\<T\>\> load(IContext context)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns**: Future\<List\<T\>\> - list of data items

