---
type: docs
title: "Notifier"
linkTitle: "Notifier"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-commons-dart"
description: >
    Helper class that can be use to notify one or more components.
---

### Description

The Notifier class is a helper class that can be use to notify one or more components.

### Static methods

#### notify
Sets execution parameters.

> `static` void notify(String correlationId, List components, [Parameters](../parameters) args)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **components**: List - list of components that are to be notified.
- **args**: [Parameters](../parameters) - notification arguments.

#### notifyOne
Notifies a specific component.

To be notiied, components must implement the [INotifiable](../inotifiable) interface.
If they don't, the call to this method has no effect.

> `static` void notifyOne(String correlationId, component, [Parameters](../parameters) args)

- **correlationId**: String - (optional) transaction id used to trace execution through the call chain.
- **component**: dynamic - component that is to be notified.
- **args**: [Parameters](../parameters) - notifiation arguments.


### See also
- #### [INotifiable](../inotifiable)
