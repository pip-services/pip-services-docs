---
type: docs
title: "Notifier"
linkTitle: "Notifier"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-components-dart"
description: >
    Helper class that can be use to notify one or more components.
---

### Description

The Notifier class is a helper class that can be use to notify one or more components.

### Static methods

#### notify
Sets execution parameters.

> `static` void notify(IContext? context, List? components, [Parameters](../parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chainn.
- **components**: List? - list of components that are to be notified.
- **args**: [Parameters](../parameters) - notification arguments.

#### notifyOne
Notifies a specific component.

To be notiied, components must implement the [INotifiable](../inotifiable) interface.
If they don't, the call to this method has no effect.

> `static` void notifyOne(IContext? context, component, [Parameters](../parameters) args)

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: dynamic - component that is to be notified.
- **args**: [Parameters](../parameters) - notifiation arguments.


### See also
- #### [INotifiable](../inotifiable)
