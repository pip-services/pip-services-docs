---
type: docs
title: "DefaultContainerFactory"
linkTitle: "DefaultContainerFactory"
gitUrl: "https://github.com/pip-services3-gox/pip-services3-container-gox"
description: >
    Creates default container components (loggers, counters, caches, locks, etc.) by their descriptors.
---

**Implements:** [CompositeFactory](../../../components/build/composite_factory)


### Description

The DefaultContainerFactory class allows you to create factories used to create default container components by their descriptors. The factories included are:

1. [DefaultInfoFactory](../../../context/default_info_factory)
2. [DefaultCredentialStoreFactory](../../../config/auth/default_credential_store_factory)
3. [DefaultDiscoveryFactory](../../../config/connect/default_discovery_factory)
4. [DefaultTestFactory](../../../container/test/default_test_factory)


### Constructors

#### NewDefaultContainerFactoryFromFactories
Creates a new instance of the factory and sets nested factories.

> NewDefaultContainerFactoryFromFactories(factories ...[IFactory](../../../components/build/ifactory)) [*CompositeFactory](../../../components/build/composite_factory)

- **factories**: ...[IFactory](../../../components/build/ifactory) - list of nested factories

#### NewDefaultContainerFactory
Create a new instance of the factory and sets nested factories.

> NewDefaultContainerFactory() [*CompositeFactory](../../../components/build/composite_factory)


### See also
- #### [Factory](../../../components/build/factory)


