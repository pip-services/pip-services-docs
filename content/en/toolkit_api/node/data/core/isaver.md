---
type: docs
title: "ISaver<T>"
linkTitle: "ISaver"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-data-nodex"
description: >
    Interface for data processing components that save data items.
---

### Description

The ISaver interface is used by data processing components that save data items.

### Instance methods

#### save
Saves given data items.

> save(correlationId: string, items: T[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **items**: T[] - a list of items to save.

