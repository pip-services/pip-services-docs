---
type: docs
title: "Component"
linkTitle: "Component"
gitUrl: "https://github.com/pip-services3-python/pip-services3-components-python"
description: >
    Abstract component that supportes configurable dependencies, logging
    and performance counters.
---

**Implemenst:** [IConfigurable](../../commons/config/iconfigurable), [IReferenceable](../../commons/refer/ireferenceable)

##### Configuration parameters

**dependencies**:
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
TODO add description
> **_logger**: [CompositeLogger](../log/composite_logger)

#### _counters
TODO add description
> **_counters**: [CompositeCounters](../count/composite_counters)

#### _dependency_resolver
TODO add description
> **_dependency_resolver**: [DependencyResolver](../../commons/refer/dependency_resolver)

#### _tracer
TODO add description
> **_tracer**: [CompositeTracer](../trace/composite_tracer)

</span>

### Methods

#### configure
Configures component by passing configuration parameters.

> configure(config: [ConfigParams](../../commons/config/config_params))

- **config**: [ConfigParams](../../commons/config/config_params) - configuration parameters to be set.


#### set_references
Sets references to dependent components.

> set_references(references: [IReferences](../../commons/refer/ireferences))

- **references**: [IReferences](../../commons/refer/ireferences) - references to locate the component dependencies.