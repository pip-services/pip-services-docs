---
type: docs
title: "Notifier"
linkTitle: "Notifier"
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    Helper class that can be use to notify one or more components.
---

### Description

The Notifier class is a helper class that can be use to notify one or more components.

### Static methods

#### notify
Sets execution parameters.

> `static` notify(correlation_id: str, components: List[Any], args: [Parameters](../parameters)): void

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **components**: List[Any] - a list of components that are to be notified.
- **args**: [Parameters](../parameters) - notification arguments.

#### notify_one
Notifies specific component.

To be notiied components must implement [INotifiable](../inotifiable) interface.
If they don't the call to this method has no effect.

> `static` notify_one(correlation_id: str, component: Any, args: [Parameters](../parameters))

- **correlation_id**: str - (optional) transaction id to trace execution through call chain.
- **component**: Any - the component that is to be notified.
- **args**: [Parameters](../parameters) - notifiation arguments.


### See also
- #### [INotifiable](../inotifiable)
