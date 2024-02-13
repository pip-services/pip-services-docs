---
type: docs
title: "Exec"
linkTitle: "Exec"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-components-java"
description: >
    
    Todo: Rewrite this description.
---
---

<div class="module-body"> 

### Interfaces

#### [IExecutable](iexecutable)
Interface for components that can be called to execute work.

#### [INotifiable](inotifiable)
Interface for components that can be asynchronously notified.
The notification may include an optional argument that describes
the occured event.

#### [IParameterized](iparameterized)
Interface for components that require execution parameters.

<br>

### Classes

#### [Executor](executor)
Helper class that executes components.

#### [FixedRateTimer](fixed_rate_timer)
Timer that is triggered in equal time intervals.
It has a symmetric cross-language implementation 
and is often used by Pip.Services toolkit to
perform periodic processing and cleanup in microservices.

#### [Notifier](notifier)
Helper class that notifies components.

#### [Opener](opener)
Helper class that opens components.

#### [Parameters](parameters)
Contains a map with execution parameters.
In general, this map may contain non-serializable values.
And in contrast with other maps, its getters and setters
support dot notation and are able to access properties
in the entire object graph.
This class is often use to pass execution and notification
arguments, and parameterize classes before execution.

</div>

