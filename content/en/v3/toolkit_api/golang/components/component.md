---
type: docs
title: "Component"
linkTitle: "Component"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-components-gox"
description: >
    Component that supports configurable dependencies, logging
    and performance counters.
---

### Description

The component class allows you to create components that support configurable dependencies, logging, and performance counters.

#### Configuration parameters

- **dependencies**:
    - **[dependency name 1]**: Dependency 1 locator (descriptor)
    - ...
    - **[dependency name N]**: Dependency N locator (descriptor)


#### References
- **\*:counters:\*:\*:1.0** - (optional) [ICounters](../count/icounters) components to pass collected measurements
- **\*:logger:\*:\*:1.0** - (optional) [ILogger](../log/ilogger) components to pass log messages
- **\*:tracer:\*:\*:1.0** - (optional) [ITracer](../trace/itracer) components to trace executed operations
- ...                                    References must match configured dependencies.

### Fields

<span class="hide-title-link">

#### Logger
Components to pass log messages
> **Logger**: [CompositeLogger](../log/composite_logger)

#### Counters
Components to pass collected measurements
> **Counters**: [CompositeCounters](../count/composite_counters)

#### DependencyResolver
A dependency resolver
> **DependencyResolver**: [DependencyResolver](../../commons/refer/dependency_resolver)

</span>

### Instance methods

#### Configure
Configures component by passing configuration parameters.

> (c [*Component]()) Configure(config [*config.ConfigParams](../../commons/config/config_params))

- **config**: [*config.ConfigParams](../../commons/config/config_params) - configuration parameters to be set.


#### SetReferences
Sets references to dependent components.

> (c [*Component]()) SetReferences(references [refer.IReferences](../../commons/refer/ireferences))

- **references**: [refer.IReferences](../../commons/refer/ireferences) - references to locate the component dependencies.
