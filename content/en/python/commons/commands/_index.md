---
type: docs
title: "Commands"
linkTitle: "Commands"
no_list: true
gitUrl: "https://github.com/pip-services3-python/pip-services3-commons-python"
description: >
    The IEventListener interface allows you to define actions to be taken by listener objects after receiving a notification on a fired event.


   This package contains interfaces and classes that can be used to implement various remote procedure calls (RPCs). In it, RPCs replace unique calls with universal "message transfer" calls, in which the message itself contains the called method's signature, as well as the parameters to pass for its execution. 
    
       
---

<div class="module-body"> 

### Interfaces

#### [ICommandInterceptor](icommand_interceptor)
Implements a [command](icommand) wrapped by an interceptor.
It allows to build command call chains. The interceptor can alter execution
and delegate calls to a next command, which can be intercepted or concrete.

#### [ICommand](icommand)
An interface for Commands, which are part of the Command design pattern. Each command wraps a method or function and allows 
to call them in uniform and safe manner.

#### [ICommandable](icommandable)
An interface for commandable objects, which are part of the command design pattern.
The commandable object exposes its functonality as commands and events groupped
into a [CommandSet](command_set).
This interface is typically implemented by controllers and is used to auto generate
external interfaces.

#### [IEventListener](ievent_listener)
An interface for listener objects that receive notifications on fired events.

#### [IEvent](ievent)
An interface for Events, which are part of the Command design pattern.
Events allows to send asynchronious notifications to multiple subscribed listeners.

<br>

### Classes

#### [CommandSet](command_set)
Contains a set of commands and events supported by a [commandable](icommandable) object.
The CommandSet supports command interceptors to extend and the command call chain.   
CommandSets can be used as alternative commandable interface to a business object.
It can be used to auto generate multiple external services for the business object
without writing much code.

#### [Command](command)
Concrete implementation of [ICommand](icommand) interface. Command allows to call a method
or function using Command pattern.

#### [Event](event)
Concrete implementation of [IEvent](ievent) interface.
It allows to send asynchronous notifications to multiple subscribed listeners.

</div>
