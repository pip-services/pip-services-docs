---
type: docs
title: "Notifier"
linkTitle: "Notifier"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-commons-nodex"
description: >
    Helper class that can be use to notify one or more components.
---

### Description

The Notifier class is a helper class that can be use to notify one or more components.

### Static methods

#### notify
Sets execution parameters.

> `public static` notify(correlationId: string, components: any[], args: [Parameters](../parameters)): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: any[] - list of components that are to be notified.
- **args**: [Parameters](../parameters) - notification arguments.

#### notifyOne
Notifies a specific component.

To be notiied, components must implement the [INotifiable](../inotifiable) interface.
If they don't, the call to this method has no effect.

> `public static` notifyOne(correlationId: string, component: any, args: [Parameters](../parameters)): void

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **component**: any - component that is to be notified.
- **args**: [Parameters](../parameters) - notifiation arguments.


### See also
- #### [INotifiable](../inotifiable)
