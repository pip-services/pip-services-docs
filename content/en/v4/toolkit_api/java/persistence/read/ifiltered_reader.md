---
type: docs
title: "IFilteredReader<T>"
linkTitle: "IFilteredReader"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-persistence-java"
description: >
    Interface for data processing components that can retrieve a list of data items through the use of a filter.
---

### Description

The IFilteredReader interface is used by data processing components that can retrieve a list of data items through the use of a filter.

### Instance methods

#### getListByFilter
Gets a list of data items using filter parameters.

> List<T> getListByFilter([IContext](../../../components/context/icontext) context, [FilterParams](../../../data/query/filter_params) filter, SortParams sort) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **filter**: [FilterParams](../../../data/query/filter_params) - (optional) filter parameters
- **sort**: [SortParams](../../../data/query/sort_params) - (optional) sort parameters
- **returns**: List<T> - list of items

