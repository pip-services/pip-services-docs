---
type: docs
title: "ILoader"
linkTitle: "ILoader"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that load data items.
---


### Methods

#### load
Loads data items.

> load(correlation_id: Optional[str]): List[T]

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **returns**: List[T] - a list of data items

