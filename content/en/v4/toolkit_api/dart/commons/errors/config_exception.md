---
type: docs
title: "ConfigException"
linkTitle: "ConfigException"
gitUrl: "https://github.com/pip-services4/pip-services4-dart/tree/main/pip-services4-commons-dart"
description: >
    Errors related to mistakes in microservice's user-defined configurations.
---

**Extends:** [ApplicationException](../application_exception)

### Description

The ConfigException is used to manage errors related to mistakes in microservice's user-defined configurations. 

### Constructors
Creates an error instance and assigns its values.

> ConfigException([String? trace_id, String? code, String? message])

- **trace_id**: String? - (optional) unique transaction id used to trace execution through the call chain.
- **code**: String? - (optional) unique error code. Default: "UNKNOWN".
- **message**: String? - (optional) human-readable description of the error.

