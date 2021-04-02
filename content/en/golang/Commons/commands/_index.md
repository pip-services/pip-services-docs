---
type: docs
title: "Commands"
linkTitle: "Commands"
gitUrl: "https://github.com/pip-services3-go/pip-services3-commons-go"
---

# Overview 

Contains implementation of Command design patterns, which can be used to implement various remote procedure calls (RPCs). RPCs replace unique calls with universal "message transfer" calls, in which the message itself contains the called method's signature, as well as the parameters to pass for execution.

When designing calls of methods/commands using the Command design pattern, uniform interfaces can be used, which, in turn, allow any amount of concrete methods to be called.

Command design patterns can be used for intercepting messages and for various logging implementations.

These design patterns allow us to create Commandable Interfaces, which are completely universal. If an object extends ICommandable and returns a CommandSet, then we can implement, with minimal code, a commandable client for this object, using various technologies.

Commandable Interfaces – part of the command design pattern, used to make classes with certain logic, which are capable of receiving and processing commands in this universal form.

Command interceptors – modify the message execution pipeline. Command interceptors are used to intercept calls, perform a set of actions, and, optionally, cancel the command's actual execution by simply returning a result. This logic is used in aspect-oriented programming. Aspect-oriented programming contains perpendicular logic (aspects, for example: logging, caching, blocking), which can be removed from the business logic and added to these perpendicular calls. When using interceptors, a command can pass through an execution chain, consisting of interceptors, which can:

simply make some note of the command, notify, log, get metrics, or do some other passive task; or intercept the command completely and, for example, return a previous record of the call from the cache. A command’s return value can also be intercepted in a similar manner: the result can be written to cache, so that the next call doesn’t have to be made. Intercepted commands are used as pattern decorators in the command design pattern. They are represented as regular commands, but run their own logic before calling the actual command.