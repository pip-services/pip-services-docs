---
type: docs
title: "ICachedTraceSaver"
linkTitle: "ICachedTraceSaver"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    ICachedTraceSaver Abstract tracer that caches recorded traces in memory and periodically dumps them.
---

### Description

Child classes implement saving cached traces to their specified destinations.

See [ITracer](../itracer)
See [OperationTrace](../operation_trace)

### Methods

#### Save
Save method for counters.

> Save(ctx context.Context, operations [][OperationTrace](../operation_trace)) error

- **ctx**: context.Context - operation context.
- **operations**: [][OperationTrace](../operation_trace) - list of operations for saving.
- **returns**: error - svae error.
