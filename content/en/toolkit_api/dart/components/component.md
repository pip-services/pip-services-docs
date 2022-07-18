---
type: docs
title: "Component"
linkTitle: "Component"
gitUrl: "https://github.com/pip-services3-dart/pip-services3-components-dart"
description: >
    Component that supports configurable dependencies, logging
    and performance counters.
---

**Implements:** [IConfigurable](../../commons/config/iconfigurable), [IReferenceable](../../commons/refer/ireferenceable)

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
- ...                                    References must match configured dependencies.

### Fields

<span class="hide-title-link">

#### logger
Components to pass log messages
> **logger**: [CompositeLogger](../log/composite_logger)

#### _counters
Components to pass collected measurements
> **_counters**: [CompositeCounters](../count/composite_counters)

#### dependencyResolver
Dependency resolver
> **dependencyResolver**: [DependencyResolver](../../commons/refer/dependency_resolver)

</span>

### Instance methods

#### configure
Configures a component by passing its configuration parameters.

`@override`
> void configure([ConfigParams](../../commons/config/config_params) config)

- **config**: [ConfigParams](../../commons/config/config_params) - configuration parameters to be set.


#### setReferences
Sets references to dependent components.

`@override`
> void setReferences([IReferences](../../commons/refer/ireferences) references)

- **references**: [IReferences](../../commons/refer/ireferences) - references to locate the component's dependencies.
