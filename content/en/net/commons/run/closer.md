---
type: docs
title: "Closer"
linkTitle: "Closer"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class that allows you to close one or multiple components at the same time.
---

### Description

The Closer class allows you to close one or multiple components at the same time.

### Static methods

#### close
Closes multiple components.

To be closed components must implement [IClosable](../iclosable) interface.
If they don't the call to this method has no effect.

> `public static` close(correlationId: string, components: any[]): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **components**: any[] - the list of components that are to be closed.

#### closeOne
Closes specific component.
To be closed components must implement [IClosable](../iclosable) interface.
If they don't the call to this method has no effect.

> `public static` closeOne(correlationId: string, component: any): Promise\<void\>

- **correlationId**: string - (optional) transaction id to trace execution through call chain.
- **component**: any - the component that is to be closed.

### See also
- #### [IClosable](../iclosable)
