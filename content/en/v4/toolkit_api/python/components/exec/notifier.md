---
type: docs
title: "Notifier"
linkTitle: "Notifier"
gitUrl: "https://github.com/pip-services4/pip-services4-python/tree/main/pip-services4-components-python"
description: >
    Helper class that can be use to notify one or more components.
---

### Description

The Notifier class is a helper class that can be use to notify one or more components.

### Static methods

#### notify
Sets execution parameters.

> `static` notify(context: Optional[IContext], components: List[Any], args: [Parameters](../parameters))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **components**: List[Any] - a list of components that are to be notified.
- **args**: [Parameters](../parameters) - notification arguments.

#### notify_one
Notifies specific component.

To be notiied components must implement [INotifiable](../inotifiable) interface.
If they don't, the call to this method has no effect.

> `static` notify_one(context: Optional[IContext], component: Any, args: [Parameters](../parameters))

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **component**: Any - the component that is to be notified.
- **args**: [Parameters](../parameters) - notifiation arguments.


### See also
- #### [INotifiable](../inotifiable)
