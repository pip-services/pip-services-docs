---
type: docs
title: "Component"
linkTitle: "Component"
gitUrl: "https://github.com/pip-services3-nodex/pip-services3-components-nodex"
description: >
    Component that supports configurable dependencies, logging
    and performance counters.
---

**Implemenst:** [IConfigurable](../../commons/config/iconfigurable), [IReferenceable](../../commons/refer/ireferenceable)

### Description

The component class allows you to create components that support configurable dependencies, logging, and performance counters.

##### Configuration parameters

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

#### _logger
Components to pass log messages
> `protected` **_logger**: [CompositeLogger](../log/composite_logger)

#### _counters
Components to pass collected measurements
> `protected` **_counters**: [CompositeCounters](../count/composite_counters)

#### _dependency_resolver
A dependency resolver
> `protected` **_dependency_resolver**: [DependencyResolver](../../commons/refer/dependency_resolver)

#### _tracer
Components to record traces
> `protected` **_tracer**: [CompositeTracer](../trace/composite_tracer)

</span>

### Instance methods

#### configure
Configures component by passing configuration parameters.

> `public` configure(config: [ConfigParams](../../commons/config/config_params)): void

- **config**: [ConfigParams](../../commons/config/config_params) - configuration parameters to be set.


#### setReferences
Sets references to dependent components.

> `public` setReferences(references: [IReferences](../../commons/refer/ireferences))

- **references**: [IReferences](../../commons/refer/ireferences) - references to locate the component dependencies.
