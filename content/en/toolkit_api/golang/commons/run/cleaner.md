---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-commons-gox"
description: >
    Helper class that allows you to clear the state of components.
---

### Description

The Cleaner class allows you to clear the state of components.

### Methods

#### Clear
Clears state of multiple components.

To be cleaned, state components must implement the [ICleanable](../icleanable) interface.
If they don't, the call to this method has no effect.

> (c *TCleaner) Clear(ctx context.Context, correlationId string, components []any) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: []any - list of components that are to be cleaned.
- **returns**: error - return error if not cleared

#### ClearOne
Clears state of specific component.
To be cleaned, state components must implement the [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> (c *TCleaner) ClearOne(ctx context.Context, correlationId string, component any) error

- **ctx**: context.Context - operation context.
- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: any - component that is to be cleaned.
- **returns**: error - return error if not cleared

### See also
- #### [ICleanable](../icleanable)
