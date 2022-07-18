---
type: docs
title: "DataDogLogMessage"
linkTitle: "DataDogLogMessage"
gitUrl: "https://github.com/pip-services3-dotnet/pip-services3-datadog-dotnet"
description: >
    Defines fields for DataDog log messages.


---

### Description

The DataDogLogMessage class defines fields for DataDog log messages.


### Properties

#### Time
Date
> `public` DateTime? Time { get; set; }

#### Tags
Tags
> `public` Dictionary\<string, string\> Tags { get; set; }
#### Status
Status
> `public` string Status { get; set; }
#### Source
Source
> `public` string Source { get; set; }
#### Service
Service
> `public` Service { get; set; }
#### Host
Host
> `public` string Host { get; set; }
#### Message
Message
> `public` string Message { get; set; }
#### LoggerName
Logger name
> `public` string LoggerName { get; set; }
#### ThreadName
Thread name
> `public` string ThreadName { get; set; }
#### ErrorMessage
Error message
> `public` string ErrorMessage { get; set; }
#### ErrorKind
Error kind
> `public` string ErrorKind { get; set; }
#### ErrorStack
Error stack
> `public` string ErrorStack { get; set; }
