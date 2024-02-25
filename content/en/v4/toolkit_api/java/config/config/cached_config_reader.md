---
type: docs
title: "CachedConfigReader"
linkTitle: "CachedConfigReader"
gitUrl: "https://github.com/pip-services4/pip-services4-java/tree/main/pip-services4-config-java"
description: >
    Creates a cached configuration reader.
---

**Inherits**: [IConfigurable](../../../components/config/iconfigurable), [IReconfigurable](../../../components/config/ireconfigurable), [IConfigReader](../iconfig_reader)

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

> `public` void configure(ConfigParams config)

- **config** ConfigParams - configuration params.

#### performReadConfig

> `protected abstract` ConfigParams performReadConfig(IContext context, ConfigParams parameters) throws ApplicationException

- **config:** ConfigParams - configuration params.

#### readConfig
Gets the timeout.

> `public` ConfigParams readConfig(IContext context, ConfigParams parameters) throws ApplicationException

- **config** ConfigParams - configuration params.

#### readConfigSection
Gets the timeout.

> `public` ConfigParams readConfigSection(IContext context, ConfigParams parameters, String section) throws ApplicationException

- **config** ConfigParams - configuration params.
