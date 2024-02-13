---
type: docs
title: "DefaultContainerFactory"
linkTitle: "DefaultContainerFactory"
gitUrl: "https://github.com/pip-services4/pip-services4-node/tree/main/pip-services4-container-node"
description: >
    Creates default container components (loggers, counters, caches, locks, etc.) by their descriptors.
---

**Implements:** [CompositeFactory](../../../components/build/composite_factory)


### Description

The DefaultContainerFactory class allows you to create factories used to create default container components by their descriptors. The factories included are:

1. [DefaultContextFactory](../../../components/context/default_context_factory)
2. [DefaultObservabilityFactory](../../../observability/build/default_observability_factory)
3. [DefaultLogicFactory](../../../components/logic/default_logic_factory)
4. [DefaultConfigFactory](../../../components/config/default_config_factory)
5. [DefaultTestFactory](../../test/cache/default_test_factory)

### Constructors
Creates a new instance of the factory and sets nested factories.

> `public` constructor(...factories: [IFactory](../../../components/build/ifactory)[])

- **factories**: [IFactory](../../../components/build/ifactory)[] - list of nested factories


### See also
- #### [Factory](../../../components/build/factory)

