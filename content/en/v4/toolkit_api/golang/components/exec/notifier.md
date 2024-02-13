---
type: docs
title: "Notifier"
linkTitle: "Notifier"
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-components-go"
description: >
    Helper class that can be use to notify one or more components.
---

### Description

The Notifier class is a helper class that can be use to notify one or more components.

### Static methods

#### notify
Sets execution parameters.

> `public static` notify(context: [IContext](../../context/context), components: any[], args: [Parameters](../parameters)): void

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **components**: any[] - list of components that are to be notified.
- **args**: [Parameters](../parameters) - notification arguments.

#### notifyOne
Notifies a specific component.

To be notiied, components must implement the [INotifiable](../inotifiable) interface.
If they don't, the call to this method has no effect.

> `public static` notifyOne(context: [IContext](../../context/context), component: any, args: [Parameters](../parameters)): void

- **context**: [IContext](../../context/context) - (optional) execution context to trace execution through call chain.
- **component**: any - component that is to be notified.
- **args**: [Parameters](../parameters) - notifiation arguments.


### See also
- #### [INotifiable](../inotifiable)

