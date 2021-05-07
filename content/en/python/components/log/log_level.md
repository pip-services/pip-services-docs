---
type: docs
title: "LogLevel"
linkTitle: "LogLevel"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Standard log levels.

    Logs at debug and trace levels are usually captured
    only locally for troubleshooting
    and never sent to consolidated log services.
---


### Enumeration members

- **Nothing** = 0 - Nothing to be logged
- **Fatal** = 1 - Logs only fatal errors that cause microservice to fail
- **Error** = 2 - Logs all errors - fatal or recoverable
- **Warn** = 3 - Logs errors and warnings
- **Info** = 4 - Logs errors and important information messages
- **Debug** = 5 - Logs everything up to high-level debugging information
- **Trace** = 6 - Logs everything down to fine-granular debugging messages

</span>