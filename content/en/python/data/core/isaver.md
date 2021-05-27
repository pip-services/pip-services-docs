---
type: docs
title: "ISaver"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that save data items.
---


### Methods

#### save
Saves given data items.

> save(correlation_id: Optional[str], items: List[T])

- **correlation_id**: Optional[str] - (optional) transaction id to trace execution through call chain.
- **items**: List[T] - a list of items to save.

