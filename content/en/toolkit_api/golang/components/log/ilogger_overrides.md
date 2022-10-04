---
type: docs
title: "ILoggerOverrides"
linkTitle: "ILoggerOverrides"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    ILoggerOverrides abstract logger that captures and formats log messages.
---

### Description

Child classes take the captured messages and write them to their specific destinations.

### Methods

#### Write
Save method for counters.

> Write(ctx context.Context, level LevelType, correlationId string, err error, message string)

- **ctx**: context.Context - operation context.
- **level**: [LevelType](../log_level) - log level.
- **correlation_id**: string - (optional) transaction id used to trace execution through the call chain.
- **err**: error - error object associated with this message.
- **message**: string - human-readable message to log.
