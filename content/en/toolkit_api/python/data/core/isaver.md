---
type: docs
title: "ISaver"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services3-python/pip-services3-data-python"
description: >
    Interface for data processing components that save data items.
---

### Description

The ISaver interface is used by data processing components that save data items.

### Instance methods

#### save
Saves given data items.

> save(correlation_id: Optional[str], items: List[T])

- **correlation_id**: Optional[str] - (optional) transaction id used to trace execution through the call chain.
- **items**: List[T] - list of items to save.

