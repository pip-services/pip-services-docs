---
type: docs
title: "Log"
linkTitle: "Log"
no_list: true
MethodsgitUrl: "https://github.com/pip-services3-go/pip-services3-components-go"
description: >
    This package provides interfaces and classes used to create different types of loggers.
 
---
---

<div class="module-body"> 

### Constants

#### [LogLevel](log_level)
Standard log levels.

Logs at debug and trace levels are usually captured
only locally for troubleshooting
and never sent to consolidated log services.

<br>

### Interfaces

#### [ILogger](ilogger)
Interface for logger components that capture execution log messages.

<br>

### Classes

#### [CachedLogger](cached_logger)
Abstract logger that caches captured log messages in memory and periodically dumps them.
Child classes implement saving cached messages to their specified destinations.


#### [CompositeLogger](composite_logger)
Aggregates all loggers from component references under a single component.

It allows to log messages and conveniently send them to multiple destinations. 

#### [ConsoleLogger](console_logger)
Logger that writes log messages to console.

Errors are written to standard err stream
and all other messages to standard out stream.


#### [DefaultLoggerFactory](default_logger_factory)
Creates [ILogger](ilogger) components by their descriptors.


#### [Logger](logger)
Abstract logger that captures and formats log messages.
Child classes take the captured messages and write them to their specific destinations.


#### [LogLevelConverter](log_level_converter)
Helper class to convert log level values.


#### [LogMessage](log_message)
Data object to store captured log messages.
This object is used by [CachedLogger](../cached_logger).


#### [NullLogger](null_logger)
Dummy implementation of logger that doesn't do anything.

It can be used in testing or in situations when logger is required
but shall be disabled.


</div>
