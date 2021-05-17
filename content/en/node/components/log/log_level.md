---
type: docs
title: "LogLevel"
linkTitle: "LogLevel"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Standard log level enumeration.


---

### Description

 The LogLevel class provides an enumeration of standard log levels.
 
 Important points
 
 - Logs at debug and trace levels are usually captured only locally for troubleshooting and never sent to consolidated log services.

### Enumeration members

- **None** = 0 - Nothing to be logged
- **Fatal** - Logs only fatal errors that cause microservice to fail
- **Error** - Logs all errors - fatal or recoverable
- **Warn** - Logs errors and warnings
- **Info** 4 - Logs errors and important information messages
- **Debug** 5 - Logs everything up to high-level debugging information
- **Trace** 6 - Logs everything down to fine-granular debugging messages

</span>
