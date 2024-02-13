---
type: docs
title: "Notifier"
linkTitle: "Notifier"
gitUrl: "https://github.com/pip-services4/pip-services4-dotnet/tree/main/pip-services4-components-dotnet"
description: >
    Helper class that can be use to notify one or more components.
---

### Description

The Notifier class is a helper class that can be use to notify one or more components.

### Static methods

#### NotifyAsync
Sets execution parameters.

> `public static` Task NotifyAsync(IContext context, IEnumerable components, [Parameters](../parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: IEnumerable - list of components that are to be notified.
- **args**: [Parameters](../parameters) - notification arguments.

#### NotifyOneAsync
Notifies a specific component.

To be notiied, components must implement [INotifiable](../inotifiable) interface.
If they don't, the call to this method has no effect.

> `public static` Task NotifyOneAsync(IContext context, object component, [Parameters](../parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: object - component that is to be notified.
- **args**: [Parameters](../parameters) - notification arguments.


### See also
- #### [INotifiable](../inotifiable)

