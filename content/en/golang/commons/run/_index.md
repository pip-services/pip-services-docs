---
type: docs
title: "Run"
linkTitle: "Run"
no_list: true
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
description: >
    
    The Run package contains a set of interfaces and classes for the standard lifecycle of objects (opened, 
    closed, openable, closable, runnable). In addition, it has several helper classes for lifecycle management.  
---
---

<div class="module-body"> 

### Interfaces

#### [ICleanable](icleanable)
Interface for components that should clean their state.
Cleaning state most often is used during testing. 
But there may be situations when it can be done in production.

#### [IClosable](iclosable)
Interface for components that require explicit closure.
For components that require opening as well as closing 
use the [IOpenable](iopenable) interface instead.

#### [IExecutable](iexecutable)
Interface for components that can be called to execute work.

#### [INotifiable](inotifiable)
Interface for components that can be asynchronously notified.
The notification may include optional argument that describe
the occured event.

#### [IOpenable](iopenable)
Interface for components that require explicit opening and closing.
For components that perform opening on demand consider using
[IClosable](iclosable) interface instead.

#### [IParameterized](iparameterized)
Interface for components that require execution parameters.

<br>

### Classes

#### [Cleaner](cleaner)
Helper class that cleans a stored object state.

#### [Closer](closer)
Helper class that closes previously opened components.

#### [Executor](executor)
Helper class that executes components.

#### [FixedRateTimer](fixed_rate_timer)
Timer that is triggered in equal time intervals.
It has a symmetric cross-language implementation 
and is often used by the Pip.Services toolkit to
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
This class is often used to pass execution and notification
arguments, and parameterize classes before execution.

</div>
