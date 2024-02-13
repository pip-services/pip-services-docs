---
type: docs
title: "Commands"
linkTitle: "Commands"
no_list: true
gitUrl: "https://github.com/pip-services4/pip-services4-go/tree/main/pip-services4-rpc-go"
description: >
    This package contains interfaces and classes that can be used to implement various remote procedure calls (RPCs). In it, RPCs replace unique calls with universal "message transfer" calls, in which the message itself contains the called method's signature, as well as the parameters to pass for its execution.       
       
---

**Important points**    


This package allows you to create [Commandable](icommandable) interfaces, which are completely universal. Thus, for example, if an object extends [ICommandable](icommandable) and returns a [CommandSet](command_set), then you can implement a commandable client for this object, using various technologies and with minimal code.

<div class="module-body"> 

<br/>

### Description
The package main components are:    
    
- [Commandable Interfaces](icommandable) – used to make classes with a certain logic and, which are capable of receiving and processing commands in this universal form.  
- [Command interceptors](icommand_interceptor) – modify the message execution pipeline. Command interceptors are used to intercept calls, perform a set of actions, and, optionally, cancel the command's actual execution by simply returning a result. This logic is used in aspect-oriented programming. Aspect-oriented programming contains perpendicular logic (aspects, such as logging, caching, blocking), which can be removed from the business logic and added to these perpendicular calls. 
   Moreover, when using interceptors, a command can pass through an execution chain, consisting of interceptors, which can: 
    - simply take note of the command, notify, log, get metrics, or do some other passive task;
    - intercept the command completely and, for example, return a previous record of the call from the cache. 
    - intercept a command's return value and, for example, cache the result, so that the next call doesn't have to be made. 
- [Intercepted commands](intercepted_command) are used as pattern decorators that allow behavior to be added to an individual object, dynamically and without affecting the behavior of other objects from the same class. They are represented as regular commands, but run their own logic before calling the actual command. 

Typical uses of this package would be intercepting messages and various logging implementations.  

<br/>

### Interfaces

#### [ICommandInterceptor](icommand_interceptor)
Implements a [command](icommand) wrapped by an interceptor.
It allows to build command call chains. The interceptor can alter execution
and delegate calls to a following command, which can be intercepted or concrete.

#### [ICommand](icommand)
An interface for Commands, which are part of the Command design pattern. Each command wraps a method or function and allows 
to call them in a uniform and safe manner.

#### [ICommandable](icommandable)
An interface for commandable objects, which are part of the command design pattern.
The commandable object exposes its functonality as commands and events grouped
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

