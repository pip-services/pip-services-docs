---
type: docs
title: "Notifier"
linkTitle: "Notifier"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-commons-dotnet"
description: >
    Helper class that can be use to notify one or more components.
---

### Description

The Notifier class is a helper class that can be use to notify one or more components.

### Static methods

#### NotifyAsync
Sets execution parameters.

> `public static` Task NotifyAsync(string correlationId, IEnumerable components, [Parameters](../parameters) args)

- **correlationId**: string - (optional) transaction id used to trace execution through the call chain.
- **components**: IEnumerable - list of components that are to be notified.
- **args**: [Parameters](../parameters) - notification arguments.

#### NotifyOneAsync
Notifies specific component.

To be notiied, components must implement [INotifiable](../inotifiable) interface.
If they don't, the call to this method has no effect.

> `public static` Task NotifyOneAsync(string correlationId, object component, [Parameters](../parameters) args)

- **correlationId**: string - (optional) transaction id used to trace execution through teh call chain.
- **component**: object - component that is to be notified.
- **args**: [Parameters](../parameters) - notifiation arguments.


### See also
- #### [INotifiable](../inotifiable)
