---
type: docs
title: "Cleaner"
linkTitle: "Cleaner"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Helper class that allows you to clear the state of components.
---

### Description

The Cleaner class allows you to clear the state of components.

### Methods

#### Clear
Clears state of multiple components.

To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> (c *TCleaner) Clear(correlationId string, components []interface{}) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **components**: []interface{} - the list of components that are to be cleaned.
- **returns**: error - return error if not cleared

#### СlearOne
Clears state of specific component.
To be cleaned state components must implement [ICleanable](../icleanable) interface.
If they don't the call to this method has no effect.

> (c *TCleaner) ClearOne(correlationId string, component interface{}) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: interface{} - the component that is to be cleaned.
- **returns**: error - return error if not cleared

### See also
- #### [ICleanable](../icleanable)
