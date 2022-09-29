---
type: docs
title: "LogLevel"
linkTitle: "LogLevel"
MethodsgitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Standard log level enumeration.

---

### Description

 The LogLevel class provides an enumeration of standard log levels.
 
 Important points
 
 - Logs at debug and trace levels are usually captured only locally for troubleshooting and never sent to consolidated log services.

### Enumeration members

- **LevelNone** = 0 - Nothing to be logged
- **LevelFatal** = 1 - Logs only fatal errors that cause microservice to fail
- **LevelError** = 2 - Logs all errors - fatal or recoverable
- **LevelWarn** = 3 - Logs errors and warnings
- **LevelInfo** = 4 - Logs errors and important information messages
- **LevelDebug** = 5 - Logs everything up to high-level debugging information
- **LevelTrace** = 6 - Logs everything down to fine-granular debugging messages


#### ToString
Converts LogLevel to string.

> (c [CounterType]()) ToString() string

- **returns**: string - converted string counter.

#### UnmarshalJSON
Unmarshall json bytes into LogLevel.

> (c [*CounterType]()) UnmarshalJSON(data []byte) (err error)

- **data**: []byte - json data bytes.
- **err**: error - error unmarshall.

#### MarshalJSON
Marshal CounterType to json.

> (c [*CounterType]()) MarshalJSON() ([]byte, error)

- **data**: ([]byte, error) - json data bytes and error marshall.
