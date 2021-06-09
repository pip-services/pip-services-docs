---
type: docs
title: "Closer"
linkTitle: "Closer"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    Helper class that allows you to close one or multiple components at the same time.
---

### Description

The Closer class allows you to close one or multiple components at the same time.

### Methods

#### Close
Closes multiple components.

To be closed components must implement [IClosable](../iclosable) interface.
If they don't the call to this method has no effect.

> (c *TCloser) Close(correlationId string, components []interface{}) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **components**: []interface{} - the list of components that are to be closed.
- **returns**: error - return error if not closed

#### CloseOne
Closes specific component.
To be closed components must implement [IClosable](../iclosable) interface.
If they don't the call to this method has no effect.

> (c *TCloser) CloseOne(correlationId string, component interface{}) error

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: any - the component that is to be closed.
- **returns**: error - return error if not closed

### See also
- #### [IClosable](../iclosable)
