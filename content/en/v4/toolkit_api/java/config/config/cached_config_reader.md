---
type: docs
title: "CachedConfigReader"
linkTitle: "CachedConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Creates a cached configuration reader.
---

**Inherits**: [IReconfigurable](../../../components/config/ireconfigurable), [IConfigReader](../iconfig_reader)

### Description

The CachedConfigReader class allows you to create a cached configuration reader.


### Properties

#### Timeout
Timedout (Default value is 60000)
> `private` long _timeout = 60000

### Instance methods

#### getTimeout
Gets the timeout.

> `public` long getTimeout()

- **returns:** long - timeout.

#### setTimeout
Gets the timeout.

> `public` void setTimeout(long value)

- **value:** long - timeout.

#### configure
Gets the timeout.

> `public` void configure([ConfigParams](../../../components/config/config_params) config)

- **config** [ConfigParams](../../../components/config/config_params) - configuration params.

#### performReadConfig

> `protected abstract` [ConfigParams](../../../components/config/config_params) performReadConfig([IContext](../../../components/context/icontext) context, [ConfigParams](../../../components/config/config_params) parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **config:** [ConfigParams](../../../components/config/config_params) - configuration params.

#### readConfig

> `public` [ConfigParams](../../../components/config/config_params) readConfig([IContext](../../../components/context/icontext) context, [ConfigParams](../../../components/config/config_params) parameters) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns** [ConfigParams](../../../components/config/config_params) - configuration params.

#### readConfigSection
Reads a configuration section.

> `public` ConfigParams readConfigSection([IContext](../../../components/context/icontext) context, [ConfigParams](../../../components/config/config_params) parameters, String section) throws ApplicationException

- **context**: [IContext](../../../components/context/icontext) - (optional) a context to trace execution through a call chain.
- **returns** [ConfigParams](../../../components/config/config_params) - configuration params.
